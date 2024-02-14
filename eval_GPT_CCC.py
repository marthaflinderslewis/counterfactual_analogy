import openai
import numpy as np
import argparse
import time
import sys
import random

random.seed(23)

# Settings
parser = argparse.ArgumentParser()
parser.add_argument('--problem', help='Give a problem: succ, pred')
parser.add_argument('--num_permuted', help="give a number of letters in the alphabet to permute from 2 to 26")
parser.add_argument('--gpt', help='give gpt model: 3, 35, 4')

args = parser.parse_args()

# GPT settings
openai.api_key = "API KEY HERE"
if args.gpt == '3':
    print("You can no longer use the option for GPT-3 as it is deprecated")
    kwargs = {"engine":"text-davinci-003", "temperature":0, "max_tokens":40, "stop":"\n", "echo":False, "logprobs":1, }
elif args.gpt == '35':
    kwargs = { "model":"gpt-3.5-turbo", "temperature":0, "max_tokens":40, "stop":"\n"}
elif args.gpt == '4':
    kwargs = { "model":"gpt-4", "temperature":0, "max_tokens":40, "stop":"\n"}

# Load alphabets
all_prob = np.load(f'./problems/zerogen/all_prob_{args.num_permuted}_7.npz', allow_pickle=True)['all_prob']

all_responses = dict()

# Get the shuffled letters and alphabets
for alph in all_prob.item().keys():
    shuffled_letters = all_prob.item()[alph]['shuffled_letters']
    shuffled_alphabet = all_prob.item()[alph]['shuffled_alphabet']
    all_responses[alph]=dict()
    all_responses[alph]['shuffled_letters'] = shuffled_letters
    all_responses[alph]['shuffled_alphabet'] = shuffled_alphabet
    control_responses =[]
    shuffled_sample = None
    shuffled_sample_responses = None
    unshuffled_sample = None
    unshuffled_sample_responses = None

    if args.num_permuted in ['2', '5', '10', '20']:
        # Get the unshuffled letters
        unshuffled_letters = sorted(list(set(shuffled_alphabet).difference(shuffled_letters)))
        if args.problem == 'succ':
            # Make sure we don't ask for the successor of the last letter in the alphabet
            if shuffled_alphabet[-1] in shuffled_letters:
                shuffled_letters.remove(shuffled_alphabet[-1])
                shuffled_sample = random.choices(shuffled_letters, k=20)
                unshuffled_sample = random.choices(unshuffled_letters, k=20)
                shuffled_letters.append(shuffled_alphabet[-1])
            else:
                shuffled_sample = random.choices(sorted(shuffled_letters), k=20)
                unshuffled_sample = random.choices(unshuffled_letters[:-1], k=20)

        elif args.problem == 'pred':
            # Make sure we don't ask for the predecessor of the first letter in the alphabet
            if shuffled_alphabet[0] in shuffled_letters:
                shuffled_letters.remove(shuffled_alphabet[0])
                shuffled_sample = random.choices(shuffled_letters, k=20)
                unshuffled_sample = random.choices(unshuffled_letters, k=20)
                shuffled_letters = [shuffled_alphabet[0]] + shuffled_letters
            else:
                shuffled_sample = random.choices(sorted(shuffled_letters), k=20)
                unshuffled_sample = random.choices(unshuffled_letters[1:], k=20)

        else:
            print("Please enter a valid problem")
            sys.exit()

        # Trial across shuffled letters
        shuffled_sample_responses = []
        for i, letter in enumerate(shuffled_sample):
            print(i, end=' ', flush=True)
            if args.problem == 'succ':
                messages = [{'role': 'system', 'content':'You are able to solve simple letter-based problems'},
                            {'role': 'user', 'content':f"Use this fictional alphabet: {shuffled_alphabet}.\nWhat is the next letter after {letter}?\nThe next letter after {letter} is: "}]
            elif args.problem == 'pred':
                messages = [{'role': 'system', 'content':'You are able to solve simple letter-based problems'},
                            {'role': 'user', 'content':f"Use this fictional alphabet: {shuffled_alphabet}.\nWhat is the letter before {letter}?\nThe letter before {letter} is: "}]
            else:
                print('Please give a valid problem')
                sys.exit()
            response = []
            if args.gpt == '3':
                print("GPT-3 is no longer available as it has been deprecated")
                prompt = messages[1]['content']
                while len(response) == 0:
                    try:
                        response = openai.Completion.create(prompt=prompt, **kwargs)
                    except:
                        print('trying again...')
                        time.sleep(5)
                shuffled_sample_responses.append(response['choices'][0]['text'])
            else:
                while len(response) == 0:
                    try:
                        response = openai.ChatCompletion.create(messages=messages, **kwargs)
                    except:
                        print('trying again...')
                        time.sleep(5)

                shuffled_sample_responses.append(response['choices'][0]['message']['content'])
        print('\n')

        # Trial across unshuffled letters
        unshuffled_sample_responses=[]
        for i, letter in enumerate(unshuffled_sample):
            print(i, end=' ', flush=True)
            if args.problem == 'succ':
                messages = [{'role': 'system', 'content':'You are able to solve simple letter-based problems'},
                            {'role': 'user', 'content':f"Use this fictional alphabet: {shuffled_alphabet}.\nWhat is the next letter after {letter}?\nThe next letter after {letter} is: "}]
            elif args.problem == 'pred':
                messages = [{'role': 'system', 'content':'You are able to solve simple letter-based problems'},
                            {'role': 'user', 'content':f"Use this fictional alphabet: {shuffled_alphabet}.\nWhat is the letter before {letter}?\nThe letter before {letter} is: "}]
            else:
                print('Please give a valid problem')
                sys.exit()
            response = []
            if args.gpt == '3':
                print("GPT-3 is no longer available as it has been deprecated")
                prompt = messages[1]['content']
                while len(response) == 0:
                    try:
                        response = openai.Completion.create(prompt=prompt, **kwargs)
                    except:
                        print('trying again...')
                        time.sleep(5)
                unshuffled_sample_responses.append(response['choices'][0]['text'])
            else:
                while len(response) == 0:
                    try:
                        response = openai.ChatCompletion.create(messages=messages, **kwargs)
                    except:
                        print('trying again...')
                        time.sleep(5)
                unshuffled_sample_responses.append(response['choices'][0]['message']['content'])
        print('\n')

    print('Trial across alphabet')
    # Trial across alphabet
    if args.problem == 'succ':
        letters_to_use = shuffled_alphabet[:-1]
    elif args.problem == 'pred':
        letters_to_use = shuffled_alphabet[1:]

    for i, letter in enumerate(letters_to_use):
        print(i, end=' ', flush=True)
        if args.problem == 'succ':
            messages = [{'role': 'system', 'content':'You are able to solve simple letter-based problems'},
                        {'role': 'user', 'content':f"Use this fictional alphabet: {shuffled_alphabet}.\nWhat is the next letter after {letter}?\nThe next letter after {letter} is: "}]
        elif args.problem == 'pred':
            messages = [{'role': 'system', 'content':'You are able to solve simple letter-based problems'},
                        {'role': 'user', 'content':f"Use this fictional alphabet: {shuffled_alphabet}.\nWhat is the letter before {letter}?\nThe letter before {letter} is: "}]
        else:
            print('Please give a valid problem')
            sys.exit()
        response = []
        if args.gpt == '3':
            print("GPT-3 is no longer available as it has been deprecated")
            prompt = messages[1]['content']
            while len(response) == 0:
                try:
                    response = openai.Completion.create(prompt=prompt, **kwargs)
                except:
                    print('trying again...')
                    time.sleep(5)
            control_responses.append(response['choices'][0]['text'])
        else:
            while len(response) == 0:
                try:
                    response = openai.ChatCompletion.create(messages=messages, **kwargs)
                except:
                    print('trying again...')
                    time.sleep(5)
            control_responses.append(response['choices'][0]['message']['content'])
    print('\n')

    save_fname = f'./controls/gpt{args.gpt}_letterstring_control_{args.num_permuted}_{args.problem}'
    save_fname += '.npz'

    all_responses[alph]['control_responses'] = control_responses
    all_responses[alph]['shuffled_sample'] = shuffled_sample
    all_responses[alph]['shuffled_sample_responses'] = shuffled_sample_responses
    all_responses[alph]['unshuffled_sample'] = unshuffled_sample
    all_responses[alph]['unshuffled_sample_responses'] = unshuffled_sample_responses


np.savez(save_fname, all_responses=all_responses, allow_pickle=True)
