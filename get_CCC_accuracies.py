import numpy as np
import argparse
import pandas as pd
import sys

parser = argparse.ArgumentParser()
parser.add_argument('--problem', help='Give a problem: succ, pred')

args = parser.parse_args()

def compute_accuracies(trues, predictions, shuffled):
    # takes in target answers, predictions, and a list defining whether the source or target is a shuffled letter (1) or not (0).
    shuffled_correct = 0
    unshuffled_correct = 0

    for t, p, s in zip(trues, predictions,shuffled):
        p=p.strip(" '")
        if (t==p):
            if s:
                shuffled_correct+=1
            else:
                unshuffled_correct+=1
    shuffled_tot = sum(shuffled)
    unshuffled_tot = len(trues)-sum(shuffled)
    if shuffled_tot > 0:
        return shuffled_correct/shuffled_tot, unshuffled_correct/unshuffled_tot, shuffled_tot, unshuffled_tot
    else:
        return 0, unshuffled_correct/unshuffled_tot, shuffled_tot, unshuffled_tot

acc_dict = {}
if args.problem == 'pred':
    gpts = [35, 4]
elif args.problem == 'succ':
    gpts = [3, 35, 4]
for gpt in gpts:
    for num_permuted in [1, 2, 5, 10, 20, 'symb']:
        all_responses = np.load(f'CCC_results/gpt{gpt}_letterstring_control_{num_permuted}_{args.problem}.npz', allow_pickle=True)
        all_responses = all_responses['all_responses'].item()
        cr_trues = []
        cr_preds = []
        cr_shuffled = []
        for alph in all_responses.keys():
            shuffled_letters = all_responses[alph]['shuffled_letters']
            shuffled_alphabet = all_responses[alph]['shuffled_alphabet']
            if gpt == 3 and num_permuted not in [1, 'symb']:
                control_responses = all_responses[alph]['control_responses'][:25] # error in saving data
            else:
                control_responses = all_responses[alph]['control_responses']
            
            if args.problem == 'succ':
                current_cr_trues = shuffled_alphabet[1:]
            elif args.problem == 'pred':
                current_cr_trues = shuffled_alphabet[:-1]

            for i, t in enumerate(current_cr_trues):
                # defines whether the target or the source letter is a shuffled letter (1), or not (0)
                if args.problem == 'succ': 
                    source_ind = i
                else: 
                    source_ind = i+1
                if shuffled_letters and (t in shuffled_letters or shuffled_alphabet[source_ind] in shuffled_letters):
                    cr_shuffled.append(1)
                else:
                    cr_shuffled.append(0)
            cr_trues += current_cr_trues
            cr_preds += control_responses

        acc_dict[f'gpt_{gpt}_{num_permuted}'] = compute_accuracies(cr_trues, cr_preds, cr_shuffled)

acc_df = pd.DataFrame.from_dict(acc_dict, orient='index', columns =['shuf_acc', 'unshuf_acc','shuf_tot', 'unshuf_tot'])
print(acc_df)
    