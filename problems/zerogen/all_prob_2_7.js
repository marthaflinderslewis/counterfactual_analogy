var all_problems = {
  "alph_0": {
    "shuffled_letters": [
      "u",
      "b"
    ],
    "shuffled_alphabet": [
      "a",
      "u",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "b",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[r s t b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t b] &nbsp [r s t v]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[r s t b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r s t] &nbsp [q r s b]<br>[a u c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[a u c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t b v w] &nbsp [t b v x]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a u c d] &nbsp [a u c e]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[b v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k l m n] &nbsp [k l m o]<br>[u c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[s t b v] &nbsp [r t b v]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t b v w] &nbsp [s b v w]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p q r s] &nbsp [o q r s]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w x y] &nbsp [b w x y]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u c d e] &nbsp [a c d e]<br>[b v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u c d e] &nbsp [a c d e]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f g h i] &nbsp [e g h i]<br>[u c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u c d e] &nbsp [a c d e]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s t b] &nbsp [q s t b]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n o p q] &nbsp [m o p q]<br>[u c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[p q r s] &nbsp [p q r s t]<br>[a u c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t b] &nbsp [r s t b v]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r s t b] &nbsp [r s t b v]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b v w x] &nbsp [b v w x y]<br>[t b v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[u c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l m n o] &nbsp [l m n o p]<br>[b v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s t b v] &nbsp [s t b v w]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t b v w] &nbsp [t b v w x]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s t b] &nbsp [r s t b v]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a u c d] &nbsp [a u c d e]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[u c d e f f] &nbsp [u c d e f]<br>[q r s t t b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f f g h i j] &nbsp [f g h i j]<br>[t b v v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a u c c d e] &nbsp [a u c d e]<br>[n n o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t t b v w x] &nbsp [t b v w x]<br>[o p q r r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w x y y z] &nbsp [v w x y z]<br>[b v w x x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j j k l] &nbsp [h i j k l]<br>[a u c c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s t b v w w] &nbsp [s t b v w]<br>[r s t t b v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t t b v w x] &nbsp [t b v w x]<br>[j k l l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t b v w w x] &nbsp [t b v w x]<br>[a u c d e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f g g h i j] &nbsp [f g h i j]<br>[a a u c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[a u c f e] &nbsp [a u c d e]<br>[x d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b v w x m] &nbsp [b v w x y]<br>[r y t b v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d e f] &nbsp [u c d e f]<br>[a u o d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t b v r x] &nbsp [t b v w x]<br>[m w o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e f j h i] &nbsp [e f g h i]<br>[a f c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u c d e y] &nbsp [u c d e f]<br>[a v c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a u n d e] &nbsp [a u c d e]<br>[d o f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a s t b v] &nbsp [r s t b v]<br>[n o j q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p q r h t] &nbsp [p q r s t]<br>[t b v w k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e f g y i] &nbsp [e f g h i]<br>[f u c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[e c d u f] &nbsp [u c d e f]<br>[x b v w t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f e d g h] &nbsp [d e f g h]<br>[a u c e d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a c u d e] &nbsp [a u c d e]<br>[p q t s r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s r q t b] &nbsp [q r s t b]<br>[r s b t v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f c d e u] &nbsp [u c d e f]<br>[h e f g d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a d c u e] &nbsp [a u c d e]<br>[w b v t x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u c f e d] &nbsp [u c d e f]<br>[q t s r b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u c f e d] &nbsp [u c d e f]<br>[a u d c e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r v t b s] &nbsp [r s t b v]<br>[t b v x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u c e d f] &nbsp [u c d e f]<br>[d f e g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[a u c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t b] &nbsp [r s t v]<br>[t b v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[s t b v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r s t b] &nbsp [r s t v]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a u c d] &nbsp [a u c e]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[u c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[a u c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a u c d] &nbsp [a u c e]<br>[s t b v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a u c d] &nbsp [a u c e]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[a u c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_1": {
    "shuffled_letters": [
      "l",
      "b"
    ],
    "shuffled_alphabet": [
      "a",
      "l",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "b",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[p q r s] &nbsp [p q r t]<br>[i j k b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i j k b] &nbsp [i j k m]<br>[a l c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a l c d] &nbsp [a l c e]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l c d e] &nbsp [l c d f]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k b m n] &nbsp [k b m o]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[a l c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j k b m] &nbsp [j k b n]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k b m n] &nbsp [k b m o]<br>[b m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[a l c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[i j k b] &nbsp [h j k b]<br>[k b m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[l c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q r s t] &nbsp [p r s t]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j k b] &nbsp [h j k b]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c d e f] &nbsp [l d e f]<br>[i j k b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v w x] &nbsp [t v w x]<br>[l c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[k b m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j k b] &nbsp [h j k b]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l c d e] &nbsp [a c d e]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j k b] &nbsp [h j k b]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[a l c d] &nbsp [a l c d e]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k b]<br>[k b m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t u v w] &nbsp [t u v w x]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e f g] &nbsp [d e f g h]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a l c d] &nbsp [a l c d e]<br>[l c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y z]<br>[i j k b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a l c d] &nbsp [a l c d e]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e f g h] &nbsp [e f g h i]<br>[a l c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a l c d] &nbsp [a l c d e]<br>[b m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j k b] &nbsp [i j k b m]<br>[a l c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[j k k b m n] &nbsp [j k b m n]<br>[s t u v w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l c d e f f] &nbsp [l c d e f]<br>[b b m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i i j k b m] &nbsp [i j k b m]<br>[a l c d d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a a l c d e] &nbsp [a l c d e]<br>[v w x y y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s s t u v] &nbsp [r s t u v]<br>[a l c d d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a l c d d e] &nbsp [a l c d e]<br>[j k b m n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n o p q q] &nbsp [m n o p q]<br>[l c d e f f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a l c d d e] &nbsp [a l c d e]<br>[i j k k b m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k b m n n] &nbsp [j k b m n]<br>[k b m n n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j k b m m] &nbsp [i j k b m]<br>[g g h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[g o i j k] &nbsp [g h i j k]<br>[a l c d i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k b y n] &nbsp [j k b m n]<br>[w p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t c d e f] &nbsp [l c d e f]<br>[i j k b d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o p i r s] &nbsp [o p q r s]<br>[b m n o j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a l q d e] &nbsp [a l c d e]<br>[e f p h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f n h i] &nbsp [e f g h i]<br>[k l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l c d e i] &nbsp [l c d e f]<br>[k b h n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f r h i j] &nbsp [f g h i j]<br>[a l c d h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a l c d j] &nbsp [a l c d e]<br>[u v w f y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f l c d e] &nbsp [a l c d e]<br>[k s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[o p r q s] &nbsp [o p q r s]<br>[k j b m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l e d c f] &nbsp [l c d e f]<br>[a l c e d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w t u v s] &nbsp [s t u v w]<br>[c l a d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j n b m k] &nbsp [j k b m n]<br>[k b m o n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f g j i h] &nbsp [f g h i j]<br>[k b o n m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a l d c e] &nbsp [a l c d e]<br>[m j k b i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c l a d e] &nbsp [a l c d e]<br>[m j k b i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p q r t s] &nbsp [p q r s t]<br>[e l c d a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q s r t u] &nbsp [q r s t u]<br>[n m b o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l f d e c] &nbsp [l c d e f]<br>[v s t u r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[a l c d] &nbsp [a l c e]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[b m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a l c d] &nbsp [a l c e]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a l c d] &nbsp [a l c e]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a l c d] &nbsp [a l c e]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[b m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k b m n] &nbsp [k b m o]<br>[l c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b m n o] &nbsp [b m n p]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[b m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a l c d] &nbsp [a l c e]<br>[k b m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_2": {
    "shuffled_letters": [
      "w",
      "s"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "w",
      "t",
      "u",
      "v",
      "s",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[w t u v] &nbsp [w t u s]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[w t u v] &nbsp [w t u s]<br>[v s x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[r w t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o p q r] &nbsp [o p q w]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r w t u] &nbsp [r w t v]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v s x y] &nbsp [v s x z]<br>[q r w t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v s x y] &nbsp [v s x z]<br>[u v s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r w t u] &nbsp [r w t v]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[w t u v] &nbsp [w t u s]<br>[q r w t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v s x] &nbsp [u v s y]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[w t u v] &nbsp [r t u v]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[w t u v] &nbsp [r t u v]<br>[p q r w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r w t u] &nbsp [q w t u]<br>[t u v s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r w t] &nbsp [p r w t]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t u v s] &nbsp [w u v s]<br>[s x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k l m n] &nbsp [j l m n]<br>[r w t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r w t u] &nbsp [q w t u]<br>[s x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t u v s] &nbsp [w u v s]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s x y z] &nbsp [v x y z]<br>[v s x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p q r w] &nbsp [o q r w]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[v s x y] &nbsp [v s x y z]<br>[w t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q r w t] &nbsp [q r w t u]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m n o] &nbsp [l m n o p]<br>[r w t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v s x y] &nbsp [v s x y z]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[u v s x] &nbsp [u v s x y]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f g h] &nbsp [e f g h i]<br>[q r w t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v s] &nbsp [t u v s x]<br>[w t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m n]<br>[v s x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q r w t] &nbsp [q r w t u]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v s x y] &nbsp [v s x y z]<br>[r w t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[m n o o p q] &nbsp [m n o p q]<br>[v s s x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[v s x y z z] &nbsp [v s x y z]<br>[d e f g h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o p q r r w] &nbsp [o p q r w]<br>[t u v s s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t u v v s x] &nbsp [t u v s x]<br>[n o p p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p q q r w t] &nbsp [p q r w t]<br>[u v s s x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v s x y z z] &nbsp [v s x y z]<br>[f g g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d e e f] &nbsp [b c d e f]<br>[u v s x y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[o o p q r w] &nbsp [o p q r w]<br>[k l m m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q q r w t u] &nbsp [q r w t u]<br>[c d d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t u v s s x] &nbsp [t u v s x]<br>[k k l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[o p q r h] &nbsp [o p q r w]<br>[w t u v k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q r w z u] &nbsp [q r w t u]<br>[u v a x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[x q r w t] &nbsp [p q r w t]<br>[w i u v s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u v f x y] &nbsp [u v s x y]<br>[m n o c q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t v s x y] &nbsp [u v s x y]<br>[p q x w t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[w n o p q] &nbsp [m n o p q]<br>[r w t u m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v e x] &nbsp [t u v s x]<br>[k l m j o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g h i t k] &nbsp [g h i j k]<br>[v s o y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l n o p q] &nbsp [m n o p q]<br>[v s x h z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p q r w b] &nbsp [p q r w t]<br>[e f g h a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[i j k m l] &nbsp [i j k l m]<br>[v s y x z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t w u v s] &nbsp [w t u v s]<br>[t w r u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o q p r w] &nbsp [o p q r w]<br>[k j l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[w u t v s] &nbsp [w t u v s]<br>[e d f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n m o p q] &nbsp [m n o p q]<br>[w v u t s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t q r w p] &nbsp [p q r w t]<br>[j k m l n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w q r p t] &nbsp [p q r w t]<br>[t u v x s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u r w t q] &nbsp [q r w t u]<br>[h k j i l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c b d e f] &nbsp [b c d e f]<br>[q r u t w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q r w u t] &nbsp [q r w t u]<br>[h g f i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[t u v s] &nbsp [t u v x]<br>[w t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p q r w] &nbsp [p q r t]<br>[r w t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v s x] &nbsp [u v s y]<br>[v s x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r w t u] &nbsp [r w t v]<br>[w t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a b c d] &nbsp [a b c e]<br>[w t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v s x y] &nbsp [v s x z]<br>[q r w t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[u v s x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[w t u v] &nbsp [w t u s]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[v s x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[w t u v] &nbsp [w t u s]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_3": {
    "shuffled_letters": [
      "y",
      "q"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "y",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "q",
      "z"
    ],
    "succ": [
      {
        "prompt": "[v w x q] &nbsp [v w x z]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[o p y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v w x] &nbsp [u v w q]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u v w x] &nbsp [u v w q]<br>[o p y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y r s t] &nbsp [y r s u]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v w x q] &nbsp [v w x z]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p y r s] &nbsp [p y r t]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w x q] &nbsp [v w x z]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u v w x] &nbsp [u v w q]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y r s t] &nbsp [y r s u]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[u v w x] &nbsp [t v w x]<br>[w x q z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o p y r] &nbsp [n p y r]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y r s t] &nbsp [p r s t]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s t u v] &nbsp [r t u v]<br>[p y r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t u] &nbsp [y s t u]<br>[w x q z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k l m] &nbsp [i k l m]<br>[w x q z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w x q z] &nbsp [v x q z]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p y r s] &nbsp [o y r s]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[w x q z] &nbsp [v x q z]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r s t u] &nbsp [y s t u]<br>[y r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[o p y r] &nbsp [o p y r s]<br>[p y r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n o p y] &nbsp [n o p y r]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y r s t] &nbsp [y r s t u]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l m n] &nbsp [k l m n o]<br>[v w x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y r s t] &nbsp [y r s t u]<br>[o p y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[v w x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n o p] &nbsp [m n o p y]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c d e f] &nbsp [c d e f g]<br>[y r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p y r s] &nbsp [p y r s t]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m n o p] &nbsp [m n o p y]<br>[y r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[f g h i i j] &nbsp [f g h i j]<br>[u v w x q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i j j k] &nbsp [g h i j k]<br>[v w x q z z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p p y r s t] &nbsp [p y r s t]<br>[y r r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p y r r s t] &nbsp [p y r s t]<br>[e e f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m n o p y y] &nbsp [m n o p y]<br>[h i j k l l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p y r r s t] &nbsp [p y r s t]<br>[t u v w w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v v w x q z] &nbsp [v w x q z]<br>[b c d d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w x q q z] &nbsp [v w x q z]<br>[m n o p y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[y y r s t u] &nbsp [y r s t u]<br>[f g h i j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w x q z z] &nbsp [v w x q z]<br>[d e f f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[a t u v w] &nbsp [s t u v w]<br>[v w x u z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u f w x q] &nbsp [u v w x q]<br>[i z k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v l x q z] &nbsp [v w x q z]<br>[m z o p y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l m n o d] &nbsp [l m n o p]<br>[y r s o u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i j k m] &nbsp [h i j k l]<br>[v w x o z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s t u v c] &nbsp [s t u v w]<br>[a w x q z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v n x] &nbsp [t u v w x]<br>[p v w x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w x q y] &nbsp [v w x q z]<br>[n o p m r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h y j k l] &nbsp [h i j k l]<br>[x y r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l p y r s] &nbsp [o p y r s]<br>[s n o p y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[e f h g i] &nbsp [e f g h i]<br>[x w v q z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[v q x w z] &nbsp [v w x q z]<br>[d h f g e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[x w v q z] &nbsp [v w x q z]<br>[d b c a e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j m l k n] &nbsp [j k l m n]<br>[n r p y o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o p s r y] &nbsp [o p y r s]<br>[v q x w z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c e d f g] &nbsp [c d e f g]<br>[z w x q v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y r u t s] &nbsp [y r s t u]<br>[f i h g j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f g i h j] &nbsp [f g h i j]<br>[q w x v z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g h i k j] &nbsp [g h i j k]<br>[y r s u t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n y p o r] &nbsp [n o p y r]<br>[u r s t y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[v w x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p y r s] &nbsp [p y r t]<br>[v w x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[v w x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[o p y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[y r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v w x] &nbsp [u v w q]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n o p] &nbsp [m n o y]<br>[v w x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[v w x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[y r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w x q] &nbsp [v w x z]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_4": {
    "shuffled_letters": [
      "f",
      "c"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "f",
      "d",
      "e",
      "c",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[a b f d] &nbsp [a b f e]<br>[c g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a b f d] &nbsp [a b f e]<br>[f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e c g] &nbsp [d e c h]<br>[f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[a b f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[c g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f d e c] &nbsp [f d e g]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d e c g] &nbsp [d e c h]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f d e c] &nbsp [f d e g]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[b f d e] &nbsp [a f d e]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f d e c] &nbsp [b d e c]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f d e c] &nbsp [b d e c]<br>[d e c g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e c g h] &nbsp [d c g h]<br>[f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d e c g] &nbsp [f e c g]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f d e c] &nbsp [b d e c]<br>[b f d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j k l] &nbsp [h j k l]<br>[b f d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f d e c] &nbsp [b d e c]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f d e c] &nbsp [b d e c]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e c g h] &nbsp [d c g h]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[b f d e] &nbsp [b f d e c]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u v w x] &nbsp [u v w x y]<br>[d e c g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m n]<br>[b f d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b f d e] &nbsp [b f d e c]<br>[c g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f d e c] &nbsp [f d e c g]<br>[a b f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a b f d] &nbsp [a b f d e]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m n]<br>[a b f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[c g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s t u v] &nbsp [s t u v w]<br>[a b f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[p p q r s t] &nbsp [p q r s t]<br>[a b b f d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e c c g h i] &nbsp [e c g h i]<br>[b b f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t t u v w x] &nbsp [t u v w x]<br>[c g h h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e e c g h i] &nbsp [e c g h i]<br>[a b f d d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g g h i j k] &nbsp [g h i j k]<br>[b f d e c c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n o o p q r] &nbsp [n o p q r]<br>[f d e c c g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q r s s t u] &nbsp [q r s t u]<br>[a b f f d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a b f d d e] &nbsp [a b f d e]<br>[n o o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l m n n o p] &nbsp [l m n o p]<br>[a b f d d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c c g h i j] &nbsp [c g h i j]<br>[q q r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[b f l e c] &nbsp [b f d e c]<br>[d e c g p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u a w x y] &nbsp [u v w x y]<br>[m c g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f d e c w] &nbsp [f d e c g]<br>[n b f d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a b w d e] &nbsp [a b f d e]<br>[k y m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c g h i t] &nbsp [c g h i j]<br>[q u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s t u v m] &nbsp [s t u v w]<br>[n f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n g h i j] &nbsp [c g h i j]<br>[d e c g a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f d s c g] &nbsp [f d e c g]<br>[i r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b f d j c] &nbsp [b f d e c]<br>[o p g r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f d e c p] &nbsp [f d e c g]<br>[p q d s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[e g c h i] &nbsp [e c g h i]<br>[f c e d g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u v x w] &nbsp [t u v w x]<br>[f b d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[d b f a e] &nbsp [a b f d e]<br>[j i h k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b c d e f] &nbsp [b f d e c]<br>[c d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f b d e c] &nbsp [b f d e c]<br>[u w v x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f b d e c] &nbsp [b f d e c]<br>[n m o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a b d f e] &nbsp [a b f d e]<br>[q r s u t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c d e f g] &nbsp [f d e c g]<br>[d f b e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e c h g i] &nbsp [e c g h i]<br>[k j l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q p o r s] &nbsp [o p q r s]<br>[e b f d a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[a b f d] &nbsp [a b f e]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a b f d] &nbsp [a b f e]<br>[c g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e c g h] &nbsp [e c g i]<br>[a b f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[n o p q] &nbsp [n o p r]<br>[a b f d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f d e c] &nbsp [f d e g]<br>[d e c g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b f d e] &nbsp [b f d c]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a b f d] &nbsp [a b f e]<br>[f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[f d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f d e c] &nbsp [f d e g]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[d e c g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_5": {
    "shuffled_letters": [
      "l",
      "f"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "l",
      "g",
      "h",
      "i",
      "j",
      "k",
      "f",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[k f m n] &nbsp [k f m o]<br>[j k f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b c d e] &nbsp [b c d l]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f m n o] &nbsp [f m n p]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j k f] &nbsp [i j k m]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i j k f] &nbsp [i j k m]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j k] &nbsp [h i j f]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d e] &nbsp [b c d l]<br>[f m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c d e l] &nbsp [c d e g]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[k f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j k f] &nbsp [i j k m]<br>[k f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[s t u v] &nbsp [r t u v]<br>[c d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l g h i] &nbsp [e g h i]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[c d e l] &nbsp [b d e l]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k f m n] &nbsp [j f m n]<br>[i j k f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d e l g] &nbsp [c e l g]<br>[k f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f m n o] &nbsp [k m n o]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l g h i] &nbsp [e g h i]<br>[f m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k f m n] &nbsp [j f m n]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[c d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p q r s] &nbsp [o q r s]<br>[c d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[h i j k] &nbsp [h i j k f]<br>[e l g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d e l] &nbsp [c d e l g]<br>[d e l g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k f]<br>[c d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u v]<br>[k f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l g h i] &nbsp [l g h i j]<br>[c d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u v]<br>[c d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f m n o] &nbsp [f m n o p]<br>[c d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j k f] &nbsp [i j k f m]<br>[k f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k f m] &nbsp [j k f m n]<br>[k f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l g h i] &nbsp [l g h i j]<br>[j k f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[o p q q r s] &nbsp [o p q r s]<br>[d e l g h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[s t t u v w] &nbsp [s t u v w]<br>[d e l l g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i i j k f m] &nbsp [i j k f m]<br>[j k f f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k f f m n] &nbsp [j k f m n]<br>[d e l l g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e l g h i i] &nbsp [e l g h i]<br>[j k f f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n n o p q r] &nbsp [n o p q r]<br>[f m n o p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[d e l g h h] &nbsp [d e l g h]<br>[c d d e l g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h i j j k f] &nbsp [h i j k f]<br>[j j k f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i i j k f] &nbsp [h i j k f]<br>[b c d d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a b c c d e] &nbsp [a b c d e]<br>[j k k f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[g v i j k] &nbsp [g h i j k]<br>[c d e l u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i r k] &nbsp [g h i j k]<br>[t j k f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[s b u v w] &nbsp [s t u v w]<br>[k f m n e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e l g h b] &nbsp [e l g h i]<br>[o p q z s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f m v o p] &nbsp [f m n o p]<br>[j o f m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i u k f m] &nbsp [i j k f m]<br>[k r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j k f m x] &nbsp [j k f m n]<br>[v j k f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b c t e l] &nbsp [b c d e l]<br>[m e l g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[w g h i j] &nbsp [l g h i j]<br>[k f r n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l g h f j] &nbsp [l g h i j]<br>[j k c m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[e l i h g] &nbsp [e l g h i]<br>[h j i k f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h k j i f] &nbsp [h i j k f]<br>[i k j f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i g h l j] &nbsp [l g h i j]<br>[d l e g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h j i k f] &nbsp [h i j k f]<br>[b l d e c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q p o r s] &nbsp [o p q r s]<br>[l i h g j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m j k f i] &nbsp [i j k f m]<br>[f m p o n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j n f m k] &nbsp [j k f m n]<br>[k h i j g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[o r q p s] &nbsp [o p q r s]<br>[e i g h l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g h k j i] &nbsp [g h i j k]<br>[i f k j m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f m p o n] &nbsp [f m n o p]<br>[h f j k i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[k f m n] &nbsp [k f m o]<br>[f m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[d e l g] &nbsp [d e l h]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e l g h] &nbsp [e l g i]<br>[j k f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f m n o] &nbsp [f m n p]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k f m] &nbsp [j k f n]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j k f m] &nbsp [j k f n]<br>[i j k f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b c d e] &nbsp [b c d l]<br>[c d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c d e] &nbsp [b c d l]<br>[d e l g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j k f] &nbsp [i j k m]<br>[f m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_6": {
    "shuffled_letters": [
      "m",
      "e"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "d",
      "m",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "e",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[k l e n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m f g h] &nbsp [m f g i]<br>[d m f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e n o p] &nbsp [e n o q]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d m f] &nbsp [c d m g]<br>[d m f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n o p q] &nbsp [n o p r]<br>[e n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e n o p] &nbsp [e n o q]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k l e n] &nbsp [k l e o]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a b c d] &nbsp [a b c m]<br>[l e n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k l e] &nbsp [j k l n]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a b c d] &nbsp [a b c m]<br>[k l e n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[d m f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k l e n] &nbsp [j l e n]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o p q r] &nbsp [n p q r]<br>[k l e n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l e n o] &nbsp [k e n o]<br>[c d m f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d m f g] &nbsp [c m f g]<br>[k l e n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k l e] &nbsp [i k l e]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p q r s] &nbsp [o q r s]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j k l e] &nbsp [i k l e]<br>[b c d m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c d m] &nbsp [a c d m]<br>[d m f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[w x y z] &nbsp [v x y z]<br>[e n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[d m f g] &nbsp [d m f g h]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[c d m f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k l e n] &nbsp [k l e n o]<br>[d m f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b c d m] &nbsp [b c d m f]<br>[m f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b c d m] &nbsp [b c d m f]<br>[j k l e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j k l] &nbsp [i j k l e]<br>[b c d m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p q r s] &nbsp [p q r s t]<br>[d m f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a b c d] &nbsp [a b c d m]<br>[e n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e n o p] &nbsp [e n o p q]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b c d m] &nbsp [b c d m f]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[b c d m f f] &nbsp [b c d m f]<br>[k l e n n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a b c d m m] &nbsp [a b c d m]<br>[c c d m f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d d m f] &nbsp [b c d m f]<br>[u v w x y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f f g h i j] &nbsp [f g h i j]<br>[m f f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a b c d d m] &nbsp [a b c d m]<br>[b c c d m f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j k l l] &nbsp [h i j k l]<br>[m f g h i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m f g h i i] &nbsp [m f g h i]<br>[d m f g h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l l e n o p] &nbsp [l e n o p]<br>[b c d d m f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k l e e n o] &nbsp [k l e n o]<br>[t u u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m f g g h i] &nbsp [m f g h i]<br>[l e n n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[j k l g n] &nbsp [j k l e n]<br>[g h m j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k u e n o] &nbsp [k l e n o]<br>[a b c u m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[c d v f g] &nbsp [c d m f g]<br>[e d o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e n w p q] &nbsp [e n o p q]<br>[m f g h j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a b c q m] &nbsp [a b c d m]<br>[d m f l h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q r h t u] &nbsp [q r s t u]<br>[l e n i p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j z l e] &nbsp [i j k l e]<br>[f n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l j n o p] &nbsp [l e n o p]<br>[k l e p o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c p m f g] &nbsp [c d m f g]<br>[l a n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m v g h i] &nbsp [m f g h i]<br>[f g l i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[i f g h m] &nbsp [m f g h i]<br>[i j e l k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a c b d m] &nbsp [a b c d m]<br>[w v u x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b m d c f] &nbsp [b c d m f]<br>[x w v y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d c b m f] &nbsp [b c d m f]<br>[l e o n p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i h g j k] &nbsp [g h i j k]<br>[c f m d g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k l n e o] &nbsp [k l e n o]<br>[k h i j g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[d f m g h] &nbsp [d m f g h]<br>[i j k e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n l e k o] &nbsp [k l e n o]<br>[l e p o n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c b a d m] &nbsp [a b c d m]<br>[c f m d g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a m c d b] &nbsp [a b c d m]<br>[l i j k h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[i j k l] &nbsp [i j k e]<br>[m f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[m f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[c d m f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m f g h] &nbsp [m f g i]<br>[c d m f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i j k l] &nbsp [i j k e]<br>[c d m f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[m f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[k l e n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m f g h] &nbsp [m f g i]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e n o p] &nbsp [e n o q]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  }
}