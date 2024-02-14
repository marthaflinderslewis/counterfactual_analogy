# Using Counterfactual Tasks to Evaluate the Generality of Analogical Reasoning in Large Language Models

Code for the paper Using Counterfactual Tasks to Evaluate the Generality of Analogical Reasoning in Large Language Models

## Prerequisites

- Python 3
- [OpenAI Python Library](https://github.com/openai/openai-python)
- [NumPy](https://numpy.org/)
- [SciPy](https://scipy.org/)
- [statsmodels](https://www.statsmodels.org/stable/index.html)
- [Matplotlib](https://matplotlib.org/)
- [pandas](https://pandas.pydata.org/)
- [R](https://www.r-project.org/)


## Authorship

This work extends experiments done by[Taylor Webb](https://github.com/taylorwwebb) in https://github.com/taylorwwebb/emergent_analogies_LLM/. All modifications carried out by [Martha Lewis](https://github.com/marthaflinderslewis)

## Instructions

To generate problems with e.g. 5 letters permuted, run 

```python gen_problems_by_alph.py --num_permuted 5```
5 can be replaced with other numbers.

To evaluate GPT models on the counterfactual comprehension check (CCC), run the script `eval_GPT_CCC.py`, specifying which GPT model to run, how many letters in the alphabet should be permuted, and which CCC to run (successor or predecessor). You should already have created a set of problems with that number of letters permuted. For example, to evaluate GPT 3.5 on the CCC for an alphabet with 5 letters permuted, run:

```python eval_GPT_CCC.py --gpt 35 --num_permuted 5 --problem succ```

To get performance of models on the CCCs, run `get_CCC_accuracies.py`, specifying which CCC to analyse. For example:

```python get_CCC_accuracies.py --problem succ```

To evaluate GPT models on the counterfactual analogy problems generated, run `eval_GPT_letterstring.py`, specifying which GPT model to run, which prompt style to use, and how many letters are permuted. For example, to evaluate GPT 3.5 with a human-like prompt on problems with 10 letters permuted, run:

```python eval_GPT_letterstring.py --gpt 35 --num_permuted 10 --promptstyle human```

Performance is calculated and plotted in `plotting.ipynb`.

Predefined problems are available in the directory 'problems', pre run model predictions are available in the directories 'GPTn_predictions' and human data is available in 'data'.

