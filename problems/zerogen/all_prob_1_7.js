var all_problems = {
  "alph_0": {
    "shuffled_letters": null,
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
        "prompt": "[e f g h] &nbsp [e f g i]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p q r s] &nbsp [p q r t]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[i j k l] &nbsp [h j k l]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j k l m] &nbsp [i k l m]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m n o] &nbsp [k m n o]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f g h i] &nbsp [e g h i]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l m n o] &nbsp [k m n o]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r s t u] &nbsp [q s t u]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n o p] &nbsp [l n o p]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m n o p] &nbsp [l n o p]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k l m n] &nbsp [j l m n]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l m n o] &nbsp [k m n o]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[d e f g] &nbsp [d e f g h]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o p q r] &nbsp [o p q r s]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y z]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y z]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q r s t] &nbsp [q r s t u]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u v w x] &nbsp [u v w x y]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f g h i] &nbsp [f g h i j]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m n o p] &nbsp [m n o p q]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[g g h i j k] &nbsp [g h i j k]<br>[p q q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[d e e f g h] &nbsp [d e f g h]<br>[m m n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n o p q q r] &nbsp [n o p q r]<br>[d e f f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t u u v w x] &nbsp [t u v w x]<br>[s t u v w w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m n o p p q] &nbsp [m n o p q]<br>[r s t t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k l m m n o] &nbsp [k l m n o]<br>[g g h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h i i j k l] &nbsp [h i j k l]<br>[p q r s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e e f g h i] &nbsp [e f g h i]<br>[n n o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m n o p p q] &nbsp [m n o p q]<br>[q r s t t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v v w x y z] &nbsp [v w x y z]<br>[p q r s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[o p q r y] &nbsp [o p q r s]<br>[b c d e a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z k l m n] &nbsp [j k l m n]<br>[c d e t g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o y q r s] &nbsp [o p q r s]<br>[p q r i t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g r i j k] &nbsp [g h i j k]<br>[e f g h d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l b n o p] &nbsp [l m n o p]<br>[o p m r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d e f n h] &nbsp [d e f g h]<br>[e f j h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c d j f g] &nbsp [c d e f g]<br>[q a s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f g h i r] &nbsp [f g h i j]<br>[b v d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n o d q r] &nbsp [n o p q r]<br>[g h i j f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n o b q r] &nbsp [n o p q r]<br>[r i t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[e b c d a] &nbsp [a b c d e]<br>[o m n l p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r o p q n] &nbsp [n o p q r]<br>[l n m o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[x v w u y] &nbsp [u v w x y]<br>[i j l k m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p o n q r] &nbsp [n o p q r]<br>[t w v u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q p o r s] &nbsp [o p q r s]<br>[n k l m j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c d e g f] &nbsp [c d e f g]<br>[u v y x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j m l k] &nbsp [i j k l m]<br>[g f e h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c d e g f] &nbsp [c d e f g]<br>[p t r s q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b c f e d] &nbsp [b c d e f]<br>[v t u s w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h j i k l] &nbsp [h i j k l]<br>[l k m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e f g h] &nbsp [e f g i]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_1": {
    "shuffled_letters": null,
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
        "prompt": "[d e f g] &nbsp [d e f h]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a b c d] &nbsp [a b c e]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[j k l m] &nbsp [i k l m]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n o p q] &nbsp [m o p q]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i j k] &nbsp [g i j k]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[w x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j k l m] &nbsp [i k l m]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f g h] &nbsp [d f g h]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r s t u] &nbsp [q s t u]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f g h i] &nbsp [e g h i]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p q r s] &nbsp [o q r s]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[q r s t] &nbsp [q r s t u]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k l m n] &nbsp [k l m n o]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a b c d] &nbsp [a b c d e]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j k l] &nbsp [i j k l m]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y z]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m n]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e f g h] &nbsp [e f g h i]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q r s t] &nbsp [q r s t u]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v w x] &nbsp [u v w x y]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[s t u v v w] &nbsp [s t u v w]<br>[d e f f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t u v v] &nbsp [r s t u v]<br>[n o p q r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i j k k l m] &nbsp [i j k l m]<br>[k l m m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a b c c d e] &nbsp [a b c d e]<br>[c d e f g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p p q r s t] &nbsp [p q r s t]<br>[e f g h h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a b b c d e] &nbsp [a b c d e]<br>[o p q r r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k k l m n o] &nbsp [k l m n o]<br>[r s s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j k k l m] &nbsp [i j k l m]<br>[f g h i j j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j j k l m n] &nbsp [j k l m n]<br>[e f g g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e f f g h] &nbsp [d e f g h]<br>[q r s t u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[v w x d z] &nbsp [v w x y z]<br>[i j q l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z o p q r] &nbsp [n o p q r]<br>[o d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a b c d u] &nbsp [a b c d e]<br>[s t u v j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j u l m n] &nbsp [j k l m n]<br>[s t u v m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m n o e q] &nbsp [m n o p q]<br>[b c d e l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o p q j s] &nbsp [o p q r s]<br>[z i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o p q z s] &nbsp [o p q r s]<br>[w n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r i j k l] &nbsp [h i j k l]<br>[b c d e i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i j h l m] &nbsp [i j k l m]<br>[o p q r j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w l y z] &nbsp [v w x y z]<br>[s t k v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[c b a d e] &nbsp [a b c d e]<br>[e h g f i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f i h g] &nbsp [e f g h i]<br>[p m n o l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l k m n o] &nbsp [k l m n o]<br>[f h g i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b a c d e] &nbsp [a b c d e]<br>[d g f e h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g f h i j] &nbsp [f g h i j]<br>[w v x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p n o m q] &nbsp [m n o p q]<br>[q u s t r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p t r s q] &nbsp [p q r s t]<br>[f g h j i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q o p n r] &nbsp [n o p q r]<br>[g d e f c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t u v x w] &nbsp [t u v w x]<br>[j m l k n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a d c b e] &nbsp [a b c d e]<br>[k o m n l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[k l m n] &nbsp [k l m o]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a b c d] &nbsp [a b c e]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p q r s] &nbsp [p q r t]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a b c d] &nbsp [a b c e]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_2": {
    "shuffled_letters": null,
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
        "prompt": "[s t u v] &nbsp [s t u w]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e f g h] &nbsp [e f g i]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n o p q] &nbsp [n o p r]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m n o] &nbsp [k m n o]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r s t u] &nbsp [q s t u]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p q r s] &nbsp [o q r s]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s t u v] &nbsp [r t u v]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p q r s] &nbsp [o q r s]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[k l m n] &nbsp [k l m n o]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u v w x] &nbsp [u v w x y]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y z]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o p q r] &nbsp [o p q r s]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m n o p] &nbsp [m n o p q]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n o p] &nbsp [m n o p q]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t u v w] &nbsp [t u v w x]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p q r s] &nbsp [p q r s t]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y z]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[p q r s t t] &nbsp [p q r s t]<br>[e e f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b c d e f f] &nbsp [b c d e f]<br>[t u v w w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l l m n o p] &nbsp [l m n o p]<br>[u v w x x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d e f f g] &nbsp [c d e f g]<br>[l l m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n o p q q r] &nbsp [n o p q r]<br>[l m n o o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v v w x y] &nbsp [u v w x y]<br>[h h i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[d e f g g h] &nbsp [d e f g h]<br>[a a b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q r s t t u] &nbsp [q r s t u]<br>[m n o p p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u u v w] &nbsp [s t u v w]<br>[g h i j k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v w x y y] &nbsp [u v w x y]<br>[m n o o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[b j d e f] &nbsp [b c d e f]<br>[e f w h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u v w x h] &nbsp [u v w x y]<br>[h i y k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[c h i j k] &nbsp [g h i j k]<br>[r g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l i n o p] &nbsp [l m n o p]<br>[o d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[w j k l m] &nbsp [i j k l m]<br>[f g h e j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a b c d o] &nbsp [a b c d e]<br>[f g w i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f g h i l] &nbsp [f g h i j]<br>[p q r w t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k l m n y] &nbsp [k l m n o]<br>[h i j y l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d r s t u] &nbsp [q r s t u]<br>[u v w q y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o p a r s] &nbsp [o p q r s]<br>[v w j y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[l j k i m] &nbsp [i j k l m]<br>[g i h j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m k l j n] &nbsp [j k l m n]<br>[u v w y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b d c e f] &nbsp [b c d e f]<br>[k i j h l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q n o p m] &nbsp [m n o p q]<br>[n o p r q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m p o n q] &nbsp [m n o p q]<br>[b c d f e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n p o q r] &nbsp [n o p q r]<br>[q r t s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s r q t u] &nbsp [q r s t u]<br>[t v u w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m o n p q] &nbsp [m n o p q]<br>[a d c b e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r q s t u] &nbsp [q r s t u]<br>[a b c e d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s r t u v] &nbsp [r s t u v]<br>[d g f e h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[a b c d] &nbsp [a b c e]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f g h] &nbsp [e f g i]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_3": {
    "shuffled_letters": null,
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
        "prompt": "[m n o p] &nbsp [m n o q]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a b c d] &nbsp [a b c e]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a b c d] &nbsp [a b c e]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k l m n] &nbsp [k l m o]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[j k l m] &nbsp [i k l m]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j k l m] &nbsp [i k l m]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i j k l] &nbsp [h j k l]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u v w x] &nbsp [t v w x]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l m n o] &nbsp [k m n o]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i j k l] &nbsp [h j k l]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e f g] &nbsp [c e f g]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[a b c d] &nbsp [a b c d e]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p q r s] &nbsp [p q r s t]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m n o p] &nbsp [m n o p q]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i j k l] &nbsp [i j k l m]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u v]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q r s t] &nbsp [q r s t u]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n o p q] &nbsp [n o p q r]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a b c d] &nbsp [a b c d e]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m n]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[e f g h h i] &nbsp [e f g h i]<br>[c d d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m n o p p] &nbsp [l m n o p]<br>[v w w x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m n n o p q] &nbsp [m n o p q]<br>[o p q r s s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k k l m n] &nbsp [j k l m n]<br>[n o o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f g h h i j] &nbsp [f g h i j]<br>[m n o o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j j k l] &nbsp [h i j k l]<br>[f f g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j j k l m] &nbsp [i j k l m]<br>[t t u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b c d e f f] &nbsp [b c d e f]<br>[t u v v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r r s t u v] &nbsp [r s t u v]<br>[v v w x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s t u v v w] &nbsp [s t u v w]<br>[e f f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[g h p j k] &nbsp [g h i j k]<br>[c d s f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q v w x y] &nbsp [u v w x y]<br>[o l q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r s t b v] &nbsp [r s t u v]<br>[d v f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m j o p q] &nbsp [m n o p q]<br>[q j s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n o p u r] &nbsp [n o p q r]<br>[q r f t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s t j v w] &nbsp [s t u v w]<br>[t u v w s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a u c d e] &nbsp [a b c d e]<br>[f g h t j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u v w r y] &nbsp [u v w x y]<br>[v m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i d k l] &nbsp [h i j k l]<br>[d e j g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n o p q l] &nbsp [n o p q r]<br>[z g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[o l m n k] &nbsp [k l m n o]<br>[d e h g f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[d g f e h] &nbsp [d e f g h]<br>[v s t u r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v s t u r] &nbsp [r s t u v]<br>[u v x w y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t s r u v] &nbsp [r s t u v]<br>[c d e g f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v y x w z] &nbsp [v w x y z]<br>[k j l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h g i j k] &nbsp [g h i j k]<br>[u x w v y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j i h k l] &nbsp [h i j k l]<br>[f e g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b e d c f] &nbsp [b c d e f]<br>[j k l n m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f h g i] &nbsp [e f g h i]<br>[n m o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[j h i g k] &nbsp [g h i j k]<br>[j k l n m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f g h] &nbsp [e f g i]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v w x y] &nbsp [v w x z]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_4": {
    "shuffled_letters": null,
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
        "prompt": "[j k l m] &nbsp [j k l n]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[u v w x] &nbsp [t v w x]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l m n o] &nbsp [k m n o]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j k l m] &nbsp [i k l m]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i j k] &nbsp [g i j k]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r s t u] &nbsp [q s t u]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j k l m] &nbsp [i k l m]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r s t u] &nbsp [q s t u]<br>[v w x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p q r s] &nbsp [o q r s]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[o p q r] &nbsp [o p q r s]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o p q r] &nbsp [o p q r s]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u v]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f g h i] &nbsp [f g h i j]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e f g h] &nbsp [e f g h i]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y z]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q r s t] &nbsp [q r s t u]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t u v w] &nbsp [t u v w x]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l m n o] &nbsp [l m n o p]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e f g] &nbsp [d e f g h]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[l m n o p p] &nbsp [l m n o p]<br>[t u v w w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n n o p q r] &nbsp [n o p q r]<br>[t t u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v w x y y] &nbsp [u v w x y]<br>[c d e e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r s t u u] &nbsp [q r s t u]<br>[b c d d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p p q r s t] &nbsp [p q r s t]<br>[r r s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j j k l m n] &nbsp [j k l m n]<br>[t u v w x x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v w w x] &nbsp [t u v w x]<br>[f g h i i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m n o p q q] &nbsp [m n o p q]<br>[h i i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s t t u v] &nbsp [r s t u v]<br>[a b c d e e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n n o p q r] &nbsp [n o p q r]<br>[e e f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[o k l m n] &nbsp [j k l m n]<br>[u v w x b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i x k l] &nbsp [h i j k l]<br>[m n o p v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b f g h i] &nbsp [e f g h i]<br>[h i r k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r s c u v] &nbsp [r s t u v]<br>[v d x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o p q r v] &nbsp [o p q r s]<br>[l m w o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b j k l m] &nbsp [i j k l m]<br>[p e r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g r i j k] &nbsp [g h i j k]<br>[f o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t b c d e] &nbsp [a b c d e]<br>[g m i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o p i r s] &nbsp [o p q r s]<br>[a k c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a b s d e] &nbsp [a b c d e]<br>[c h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[w u v t x] &nbsp [t u v w x]<br>[r s u t v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i l k j] &nbsp [h i j k l]<br>[k h i j g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j l k m n] &nbsp [j k l m n]<br>[a c b d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e f h g] &nbsp [d e f g h]<br>[r v t u s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j k n m l] &nbsp [j k l m n]<br>[v w z y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m p o n q] &nbsp [m n o p q]<br>[h e f g d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g i h j k] &nbsp [g h i j k]<br>[q n o p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j k m l n] &nbsp [j k l m n]<br>[t r s q u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o m n l p] &nbsp [l m n o p]<br>[h i l k j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h g f i j] &nbsp [f g h i j]<br>[d f e g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e f g h] &nbsp [e f g i]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g h i j] &nbsp [g h i k]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_5": {
    "shuffled_letters": null,
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
        "prompt": "[c d e f] &nbsp [c d e g]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p q r s] &nbsp [p q r t]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e f g] &nbsp [d e f h]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n o p q] &nbsp [n o p r]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[a b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[w x y z] &nbsp [v x y z]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u v w x] &nbsp [t v w x]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u v w x] &nbsp [t v w x]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o p q r] &nbsp [n p q r]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o p q r] &nbsp [n p q r]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h i j k] &nbsp [g i j k]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f g h i] &nbsp [e g h i]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w x y] &nbsp [u w x y]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[v w x y] &nbsp [v w x y z]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k l m n] &nbsp [k l m n o]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[n o p q] &nbsp [n o p q r]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c d e f] &nbsp [c d e f g]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f g h i] &nbsp [f g h i j]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g h i j] &nbsp [g h i j k]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u v]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e f g] &nbsp [d e f g h]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[g g h i j k] &nbsp [g h i j k]<br>[k l m n n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[s t t u v w] &nbsp [s t u v w]<br>[u v w x x y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t u u v w x] &nbsp [t u v w x]<br>[e f g h i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r s t t u] &nbsp [q r s t u]<br>[n o o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n o p p q r] &nbsp [n o p q r]<br>[c d e e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c d e f g g] &nbsp [c d e f g]<br>[e f g h i i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r r s t u v] &nbsp [r s t u v]<br>[j k l l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p q r s s t] &nbsp [p q r s t]<br>[c d e f f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h i i j k l] &nbsp [h i j k l]<br>[l m n o p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t u v w x x] &nbsp [t u v w x]<br>[g h i j k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[k l y n o] &nbsp [k l m n o]<br>[c g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i n o p q] &nbsp [m n o p q]<br>[j k l m g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m n o p w] &nbsp [m n o p q]<br>[q r g t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d r f g h] &nbsp [d e f g h]<br>[j k t m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c d e q g] &nbsp [c d e f g]<br>[b c m e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s t u v j] &nbsp [s t u v w]<br>[b c i e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e g h i j] &nbsp [f g h i j]<br>[e f g j i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[o c q r s] &nbsp [o p q r s]<br>[a b c d v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p q r s d] &nbsp [p q r s t]<br>[u v w e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e a g h] &nbsp [d e f g h]<br>[l m n j p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[j g h i f] &nbsp [f g h i j]<br>[l k m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l j k i m] &nbsp [i j k l m]<br>[q p r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i k j] &nbsp [g h i j k]<br>[c b a d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m j k l i] &nbsp [i j k l m]<br>[q s r t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v y x w z] &nbsp [v w x y z]<br>[u v w y x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m k l j n] &nbsp [j k l m n]<br>[p o q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q p r s t] &nbsp [p q r s t]<br>[f e d g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r v t u s] &nbsp [r s t u v]<br>[k n m l o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u x w v y] &nbsp [u v w x y]<br>[t r s q u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t v u w x] &nbsp [t u v w x]<br>[k m l n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p q r s] &nbsp [p q r t]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k l m n] &nbsp [k l m o]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c d e f] &nbsp [c d e g]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_6": {
    "shuffled_letters": null,
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
        "prompt": "[b c d e] &nbsp [b c d f]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[o p q r] &nbsp [o p q s]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e f g h] &nbsp [e f g i]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[o p q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n o p q] &nbsp [n o p r]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i j k l] &nbsp [i j k m]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f g h i] &nbsp [f g h j]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[s t u v] &nbsp [r t u v]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n o p q] &nbsp [m o p q]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d e f] &nbsp [b d e f]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p q r s] &nbsp [o q r s]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o p q r] &nbsp [n p q r]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t u v w] &nbsp [s u v w]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q r s t] &nbsp [p r s t]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u v] &nbsp [r t u v]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g h i j] &nbsp [f h i j]<br>[w x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[i j k l] &nbsp [i j k l m]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[d e f g] &nbsp [d e f g h]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m n]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c d e f] &nbsp [c d e f g]<br>[k l m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e f g h] &nbsp [e f g h i]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t u v w] &nbsp [t u v w x]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r s t u] &nbsp [r s t u v]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h i j k] &nbsp [h i j k l]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q r s t] &nbsp [q r s t u]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m n]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[q q r s t u] &nbsp [q r s t u]<br>[d e f g g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u v w w x] &nbsp [t u v w x]<br>[k l m m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j k k] &nbsp [g h i j k]<br>[a b b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e f g g h] &nbsp [d e f g h]<br>[a b b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i i j k l m] &nbsp [i j k l m]<br>[q r s s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p q q r s t] &nbsp [p q r s t]<br>[o p p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g h h i j k] &nbsp [g h i j k]<br>[l m n o p p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s t u v v w] &nbsp [s t u v w]<br>[c d e f g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d e e f g h] &nbsp [d e f g h]<br>[g h h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e e f g h i] &nbsp [e f g h i]<br>[i j k l m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[o t u v w] &nbsp [s t u v w]<br>[q r s t j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u v w e] &nbsp [t u v w x]<br>[q r s t o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i j a] &nbsp [g h i j k]<br>[f g h i y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[i j k l e] &nbsp [i j k l m]<br>[s b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o a q r s] &nbsp [o p q r s]<br>[v w x y j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d s f g h] &nbsp [d e f g h]<br>[s t u b w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q t u v w] &nbsp [s t u v w]<br>[v w x m z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g h i n k] &nbsp [g h i j k]<br>[k l u n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f g h l] &nbsp [e f g h i]<br>[c d l f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o p q r c] &nbsp [o p q r s]<br>[a v c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[r u t s v] &nbsp [r s t u v]<br>[u y w x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m l k n o] &nbsp [k l m n o]<br>[q n o p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u r s t q] &nbsp [q r s t u]<br>[p o n q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t w v u x] &nbsp [t u v w x]<br>[r v t u s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i h g j k] &nbsp [g h i j k]<br>[m p o n q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v y x w] &nbsp [u v w x y]<br>[h l j k i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r p q o s] &nbsp [o p q r s]<br>[q t s r u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h k j i l] &nbsp [h i j k l]<br>[k h i j g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r s u t v] &nbsp [r s t u v]<br>[s p q r o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p m n o l] &nbsp [l m n o p]<br>[l k j m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[p q r s] &nbsp [p q r t]<br>[i j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l m n o] &nbsp [l m n p]<br>[g h i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r s t u] &nbsp [r s t v]<br>[e f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[p q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q r s t] &nbsp [q r s u]<br>[h i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h i j k] &nbsp [h i j l]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  }
}