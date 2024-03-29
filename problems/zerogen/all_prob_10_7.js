var all_problems = {
  "alph_0": {
    "shuffled_letters": [
      "q",
      "o",
      "n",
      "u",
      "f",
      "y",
      "w",
      "b",
      "z",
      "j"
    ],
    "shuffled_alphabet": [
      "a",
      "q",
      "c",
      "d",
      "e",
      "o",
      "g",
      "h",
      "i",
      "n",
      "k",
      "l",
      "m",
      "u",
      "f",
      "p",
      "y",
      "r",
      "s",
      "t",
      "w",
      "v",
      "b",
      "x",
      "z",
      "j"
    ],
    "succ": [
      {
        "prompt": "[o g h i] &nbsp [o g h n]<br>[v b x z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n k l m] &nbsp [n k l u]<br>[v b x z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a q c d] &nbsp [a q c e]<br>[r s t w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l m u] &nbsp [k l m f]<br>[q c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m u f p] &nbsp [m u f y]<br>[t w v b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f p y r] &nbsp [f p y s]<br>[l m u f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k l m u] &nbsp [k l m f]<br>[n k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g h i n] &nbsp [g h i k]<br>[a q c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p y r s] &nbsp [p y r t]<br>[q c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v b x z] &nbsp [v b x j]<br>[n k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[b x z j] &nbsp [v x z j]<br>[e o g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p y r s] &nbsp [f y r s]<br>[c d e o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b x z j] &nbsp [v x z j]<br>[v b x z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m u f p] &nbsp [l u f p]<br>[b x z j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q c d e] &nbsp [a c d e]<br>[y r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t w v b] &nbsp [s w v b]<br>[v b x z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r s t w] &nbsp [y s t w]<br>[i n k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m u f p] &nbsp [l u f p]<br>[e o g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f p y r] &nbsp [u p y r]<br>[m u f p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y r s t] &nbsp [p r s t]<br>[s t w v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[u f p y] &nbsp [u f p y r]<br>[d e o g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s t w] &nbsp [r s t w v]<br>[g h i n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u f p y] &nbsp [u f p y r]<br>[t w v b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g h i n] &nbsp [g h i n k]<br>[w v b x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l m u f] &nbsp [l m u f p]<br>[u f p y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v b x z] &nbsp [v b x z j]<br>[y r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t w v b] &nbsp [t w v b x]<br>[v b x z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k l m u] &nbsp [k l m u f]<br>[h i n k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g h i n] &nbsp [g h i n k]<br>[a q c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p y r s] &nbsp [p y r s t]<br>[w v b x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[t t w v b x] &nbsp [t w v b x]<br>[e e o g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f p y r r s] &nbsp [f p y r s]<br>[w v b b x z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l m u u f p] &nbsp [l m u f p]<br>[o g h i n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l m u f f] &nbsp [k l m u f]<br>[l m m u f p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i i n k l m] &nbsp [i n k l m]<br>[h i n n k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[y r s t t w] &nbsp [y r s t w]<br>[p y r r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v b x z z j] &nbsp [v b x z j]<br>[l l m u f p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c d d e o g] &nbsp [c d e o g]<br>[v b x z z j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a q c d e e] &nbsp [a q c d e]<br>[n k k l m u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v b x z z j] &nbsp [v b x z j]<br>[l m m u f p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[k s m u f] &nbsp [k l m u f]<br>[g r i n k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[k l q u f] &nbsp [k l m u f]<br>[d v b x z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t w j b x] &nbsp [t w v b x]<br>[z n k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k r m u f] &nbsp [k l m u f]<br>[e o g a i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p l m u f] &nbsp [k l m u f]<br>[c d e o z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d e o s h] &nbsp [d e o g h]<br>[c d e o y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k l m u w] &nbsp [k l m u f]<br>[u f p y l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m u f p b] &nbsp [m u f p y]<br>[f b y r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[l m i f p] &nbsp [l m u f p]<br>[i n k w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k g m u f] &nbsp [k l m u f]<br>[a f p y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[e c d q o] &nbsp [q c d e o]<br>[j b x z v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g e o d h] &nbsp [d e o g h]<br>[v x b z j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a c q d e] &nbsp [a q c d e]<br>[l m p f u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f u m p y] &nbsp [m u f p y]<br>[i n l k m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o c d e q] &nbsp [q c d e o]<br>[h e o g d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i l k n m] &nbsp [i n k l m]<br>[b w v t x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f p s r y] &nbsp [f p y r s]<br>[y t s r w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q c o e d] &nbsp [q c d e o]<br>[a q d c e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u r p y f] &nbsp [u f p y r]<br>[t w v x b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f p r y s] &nbsp [f p y r s]<br>[d o e g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[v b x z] &nbsp [v b x j]<br>[r s t w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u f p y] &nbsp [u f p r]<br>[t w v b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g h i n] &nbsp [g h i k]<br>[l m u f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t w v b] &nbsp [t w v x]<br>[g h i n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[a q c d] &nbsp [a q c e]<br>[p y r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f p y r] &nbsp [f p y s]<br>[q c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m u f p] &nbsp [m u f y]<br>[a q c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a q c d] &nbsp [a q c e]<br>[w v b x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t w v] &nbsp [s t w b]<br>[l m u f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g h i n] &nbsp [g h i k]<br>[y r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_1": {
    "shuffled_letters": [
      "q",
      "y",
      "o",
      "t",
      "x",
      "h",
      "u",
      "d",
      "m",
      "j"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "c",
      "q",
      "e",
      "f",
      "g",
      "y",
      "i",
      "o",
      "k",
      "l",
      "t",
      "n",
      "x",
      "p",
      "h",
      "r",
      "s",
      "u",
      "d",
      "v",
      "w",
      "m",
      "j",
      "z"
    ],
    "succ": [
      {
        "prompt": "[p h r s] &nbsp [p h r u]<br>[r s u d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i o k l] &nbsp [i o k t]<br>[s u d v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r s u d] &nbsp [r s u v]<br>[p h r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k l t n] &nbsp [k l t x]<br>[q e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x p h r] &nbsp [x p h s]<br>[g y i o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v w m j] &nbsp [v w m z]<br>[s u d v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h r s u] &nbsp [h r s d]<br>[t n x p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f g y i] &nbsp [f g y o]<br>[b c q e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w m j] &nbsp [v w m z]<br>[c q e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u d v w] &nbsp [u d v m]<br>[h r s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[y i o k] &nbsp [g i o k]<br>[p h r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i o k l] &nbsp [y o k l]<br>[h r s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u d v w] &nbsp [s d v w]<br>[i o k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f g y i] &nbsp [e g y i]<br>[r s u d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o k l t] &nbsp [i k l t]<br>[y i o k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s u d v] &nbsp [r u d v]<br>[u d v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[x p h r] &nbsp [n p h r]<br>[l t n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r s u d] &nbsp [h s u d]<br>[e f g y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n x p h] &nbsp [t x p h]<br>[e f g y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[w m j z] &nbsp [v m j z]<br>[c q e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[i o k l] &nbsp [i o k l t]<br>[x p h r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r s u d] &nbsp [r s u d v]<br>[y i o k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h r s u] &nbsp [h r s u d]<br>[b c q e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v w m j] &nbsp [v w m j z]<br>[n x p h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n x p h] &nbsp [n x p h r]<br>[v w m j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f g y] &nbsp [e f g y i]<br>[p h r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a b c q] &nbsp [a b c q e]<br>[h r s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e f g y] &nbsp [e f g y i]<br>[r s u d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s u d v] &nbsp [s u d v w]<br>[v w m j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k l t n] &nbsp [k l t n x]<br>[u d v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[v w m j z z] &nbsp [v w m j z]<br>[p h r s u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g g y i o k] &nbsp [g y i o k]<br>[h r r s u d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n x p h h r] &nbsp [n x p h r]<br>[f g y i o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h r s u u d] &nbsp [h r s u d]<br>[k l t t n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l t n x p p] &nbsp [l t n x p]<br>[f g g y i o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[x p h r r s] &nbsp [x p h r s]<br>[l t t n x p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r s u d v v] &nbsp [r s u d v]<br>[v w m j z z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g y i o k k] &nbsp [g y i o k]<br>[r s u u d v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o o k l t n] &nbsp [o k l t n]<br>[v w m j z z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c c q e f g] &nbsp [c q e f g]<br>[o k l t n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[g n i o k] &nbsp [g y i o k]<br>[m l t n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h b c q e] &nbsp [a b c q e]<br>[b l t n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g u d v w] &nbsp [s u d v w]<br>[h r s u q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[x p i r s] &nbsp [x p h r s]<br>[t n x p o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y i h k l] &nbsp [y i o k l]<br>[e f p y i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f n y i] &nbsp [e f g y i]<br>[p b r s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t n x p q] &nbsp [t n x p h]<br>[u d y w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f r y i o] &nbsp [f g y i o]<br>[t n x p c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h r s u e] &nbsp [h r s u d]<br>[k l t f x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r s u d i] &nbsp [r s u d v]<br>[k r s u d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[h p x r s] &nbsp [x p h r s]<br>[g f y i o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[v j m w z] &nbsp [v w m j z]<br>[a b c e q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w u d v s] &nbsp [s u d v w]<br>[y g f i o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k o l t n] &nbsp [o k l t n]<br>[c q e g f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t l n x p] &nbsp [l t n x p]<br>[l o k i t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n k l t o] &nbsp [o k l t n]<br>[p n x t h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u v d w m] &nbsp [u d v w m]<br>[k o l t n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d r s u h] &nbsp [h r s u d]<br>[o k t l n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v m w j z] &nbsp [v w m j z]<br>[x p h s r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g f e y i] &nbsp [e f g y i]<br>[r s d u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[b c q e] &nbsp [b c q f]<br>[t n x p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f g y] &nbsp [e f g i]<br>[h r s u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w m j] &nbsp [v w m z]<br>[o k l t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t n x p] &nbsp [t n x h]<br>[c q e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w m j] &nbsp [v w m z]<br>[d v w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c q e f] &nbsp [c q e g]<br>[v w m j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y i o k] &nbsp [y i o l]<br>[d v w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u d v w] &nbsp [u d v m]<br>[a b c q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s u d v] &nbsp [s u d w]<br>[x p h r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u d v w] &nbsp [u d v m]<br>[t n x p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_2": {
    "shuffled_letters": [
      "c",
      "v",
      "h",
      "d",
      "r",
      "y",
      "x",
      "a",
      "w",
      "i"
    ],
    "shuffled_alphabet": [
      "c",
      "b",
      "v",
      "h",
      "e",
      "f",
      "g",
      "d",
      "r",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "y",
      "s",
      "t",
      "u",
      "x",
      "a",
      "w",
      "i",
      "z"
    ],
    "succ": [
      {
        "prompt": "[f g d r] &nbsp [f g d j]<br>[b v h e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p q y s] &nbsp [p q y t]<br>[h e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[c b v h] &nbsp [c b v e]<br>[r j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q y s t] &nbsp [q y s u]<br>[f g d r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n o p q] &nbsp [n o p y]<br>[b v h e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c b v h] &nbsp [c b v e]<br>[q y s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n o p] &nbsp [m n o q]<br>[u x a w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b v h e] &nbsp [b v h f]<br>[x a w i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u x] &nbsp [s t u a]<br>[l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c b v h] &nbsp [c b v e]<br>[o p q y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[u x a w] &nbsp [t x a w]<br>[d r j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f g d] &nbsp [h f g d]<br>[f g d r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v h e f] &nbsp [b h e f]<br>[e f g d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j k l m] &nbsp [r k l m]<br>[u x a w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n o p q] &nbsp [m o p q]<br>[j k l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l m n o] &nbsp [k m n o]<br>[v h e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u x a w] &nbsp [t x a w]<br>[r j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[y s t u] &nbsp [q s t u]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[x a w i] &nbsp [u a w i]<br>[p q y s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b v h e] &nbsp [c v h e]<br>[y s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[s t u x] &nbsp [s t u x a]<br>[u x a w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[x a w i] &nbsp [x a w i z]<br>[n o p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e f g d] &nbsp [e f g d r]<br>[c b v h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o p q y] &nbsp [o p q y s]<br>[s t u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j k l m] &nbsp [j k l m n]<br>[x a w i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t u x a] &nbsp [t u x a w]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[x a w i] &nbsp [x a w i z]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m n o p] &nbsp [m n o p q]<br>[b v h e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q y s t] &nbsp [q y s t u]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y s t u] &nbsp [y s t u x]<br>[u x a w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[s t t u x a] &nbsp [s t u x a]<br>[x a w i i z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[v v h e f g] &nbsp [v h e f g]<br>[p q y s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v h e f g g] &nbsp [v h e f g]<br>[t t u x a w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e f g g d r] &nbsp [e f g d r]<br>[x x a w i z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o p q q y s] &nbsp [o p q y s]<br>[n o o p q y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b v h e e f] &nbsp [b v h e f]<br>[p q y s t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t t u x a w] &nbsp [t u x a w]<br>[k l m m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[x x a w i z] &nbsp [x a w i z]<br>[v h h e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[x a w i i z] &nbsp [x a w i z]<br>[k k l m n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e e f g d r] &nbsp [e f g d r]<br>[s t u u x a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[k s m n o] &nbsp [k l m n o]<br>[x c w i z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b a h e f] &nbsp [b v h e f]<br>[y s v u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f m d r j] &nbsp [f g d r j]<br>[y s p u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c b v o e] &nbsp [c b v h e]<br>[s t u x g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s z u x a] &nbsp [s t u x a]<br>[y s z u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c y s t u] &nbsp [q y s t u]<br>[u r a w i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[x h w i z] &nbsp [x a w i z]<br>[v h e f b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[x o w i z] &nbsp [x a w i z]<br>[p b y s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c b v w e] &nbsp [c b v h e]<br>[b o h e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s t u x c] &nbsp [s t u x a]<br>[q s t u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[v e h f g] &nbsp [v h e f g]<br>[q s y t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b e h v f] &nbsp [b v h e f]<br>[d g f r j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h g f e d] &nbsp [h e f g d]<br>[a x w i z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d f g e r] &nbsp [e f g d r]<br>[t q y s p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s a u x t] &nbsp [s t u x a]<br>[y p q o s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o y q p s] &nbsp [o p q y s]<br>[c b v e h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j m l k n] &nbsp [j k l m n]<br>[x a z i w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b v h f e] &nbsp [b v h e f]<br>[d g f r j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t w x a u] &nbsp [t u x a w]<br>[p o n q y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n q p o y] &nbsp [n o p q y]<br>[e r g d f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[p q y s] &nbsp [p q y t]<br>[x a w i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b v h e] &nbsp [b v h f]<br>[f g d r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v h e f] &nbsp [v h e g]<br>[e f g d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c b v h] &nbsp [c b v e]<br>[q y s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[j k l m] &nbsp [j k l n]<br>[r j k l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c b v h] &nbsp [c b v e]<br>[h e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b v h e] &nbsp [b v h f]<br>[m n o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f g d r] &nbsp [f g d j]<br>[h e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u x] &nbsp [s t u a]<br>[q y s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[x a w i] &nbsp [x a w z]<br>[q y s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_3": {
    "shuffled_letters": [
      "m",
      "p",
      "z",
      "b",
      "d",
      "k",
      "j",
      "l",
      "e",
      "y"
    ],
    "shuffled_alphabet": [
      "a",
      "m",
      "c",
      "p",
      "z",
      "f",
      "g",
      "h",
      "i",
      "b",
      "d",
      "k",
      "j",
      "n",
      "o",
      "l",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "e",
      "y"
    ],
    "succ": [
      {
        "prompt": "[z f g h] &nbsp [z f g i]<br>[q r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i b d k] &nbsp [i b d j]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i b d] &nbsp [h i b k]<br>[v w x e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b d k j] &nbsp [b d k n]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s t u v] &nbsp [s t u w]<br>[a m c p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v w x] &nbsp [u v w e]<br>[b d k j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p z f g] &nbsp [p z f h]<br>[o l q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n o l q] &nbsp [n o l r]<br>[h i b d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[i b d k] &nbsp [i b d j]<br>[b d k j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w x e] &nbsp [v w x y]<br>[p z f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[m c p z] &nbsp [a c p z]<br>[o l q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i b d k] &nbsp [h b d k]<br>[r s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p z f g] &nbsp [c z f g]<br>[m c p z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d k j n] &nbsp [b k j n]<br>[k j n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[n o l q] &nbsp [j o l q]<br>[d k j n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k j n o] &nbsp [d j n o]<br>[w x e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c p z f] &nbsp [m p z f]<br>[p z f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p z f g] &nbsp [c z f g]<br>[h i b d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m c p z] &nbsp [a c p z]<br>[p z f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v w x e] &nbsp [u w x e]<br>[z f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[a m c p] &nbsp [a m c p z]<br>[t u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c p z f] &nbsp [c p z f g]<br>[a m c p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h i b d] &nbsp [h i b d k]<br>[c p z f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f g h i] &nbsp [f g h i b]<br>[v w x e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d k j n] &nbsp [d k j n o]<br>[g h i b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h i b d] &nbsp [h i b d k]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w x e] &nbsp [v w x e y]<br>[a m c p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k j n o] &nbsp [k j n o l]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w x e] &nbsp [v w x e y]<br>[j n o l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c p z f] &nbsp [c p z f g]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[z f g h h i] &nbsp [z f g h i]<br>[c p z z f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m c p z z f] &nbsp [m c p z f]<br>[l q r r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a m c p p z] &nbsp [a m c p z]<br>[q r s t u u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q q r s t u] &nbsp [q r s t u]<br>[d k j n o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f g h i b b] &nbsp [f g h i b]<br>[b d k j n n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a m c p z z] &nbsp [a m c p z]<br>[v w x e y y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j n o o l q] &nbsp [j n o l q]<br>[k j n o o l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m m c p z f] &nbsp [m c p z f]<br>[p p z f g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q r s t u u] &nbsp [q r s t u]<br>[g h i b b d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h i b b d k] &nbsp [h i b d k]<br>[k j n n o l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[b f k j n] &nbsp [b d k j n]<br>[n y l q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a q c p z] &nbsp [a m c p z]<br>[j y o l q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k j n o p] &nbsp [k j n o l]<br>[v w x o y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h i b d j] &nbsp [h i b d k]<br>[i b d t j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s t j v w] &nbsp [s t u v w]<br>[n o a q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k y n o l] &nbsp [k j n o l]<br>[c l q r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[q p z f g] &nbsp [c p z f g]<br>[j n o r q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h i b d n] &nbsp [h i b d k]<br>[d t j n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h k j n o] &nbsp [d k j n o]<br>[e m c p z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a m c p t] &nbsp [a m c p z]<br>[m i b d k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[v e x w y] &nbsp [v w x e y]<br>[b i d k j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i g h f b] &nbsp [f g h i b]<br>[n k j d o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v t u s w] &nbsp [s t u v w]<br>[k j l o n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a m c z p] &nbsp [a m c p z]<br>[s q r l t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b d j k n] &nbsp [b d k j n]<br>[k i b d h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[h z f g p] &nbsp [p z f g h]<br>[a m z p c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a p c m z] &nbsp [a m c p z]<br>[t q r s l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l t r s q] &nbsp [l q r s t]<br>[a z c p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a z c p m] &nbsp [a m c p z]<br>[t q r s l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[l o q r s] &nbsp [o l q r s]<br>[m c z p f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[n o l q] &nbsp [n o l r]<br>[j n o l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f g h i] &nbsp [f g h b]<br>[k j n o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a m c p] &nbsp [a m c z]<br>[b d k j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f g h i] &nbsp [f g h b]<br>[o l q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h i b d] &nbsp [h i b k]<br>[g h i b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d k j n] &nbsp [d k j o]<br>[b d k j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u v w x] &nbsp [u v w e]<br>[n o l q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b d k j] &nbsp [b d k n]<br>[a m c p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n o l q] &nbsp [n o l r]<br>[f g h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t u v w] &nbsp [t u v x]<br>[m c p z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_4": {
    "shuffled_letters": [
      "g",
      "a",
      "q",
      "t",
      "z",
      "l",
      "h",
      "n",
      "j",
      "r"
    ],
    "shuffled_alphabet": [
      "g",
      "b",
      "c",
      "d",
      "e",
      "f",
      "a",
      "q",
      "i",
      "t",
      "k",
      "z",
      "m",
      "l",
      "o",
      "p",
      "h",
      "n",
      "s",
      "j",
      "u",
      "v",
      "w",
      "x",
      "y",
      "r"
    ],
    "succ": [
      {
        "prompt": "[l o p h] &nbsp [l o p n]<br>[z m l o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z m l o] &nbsp [z m l p]<br>[k z m l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b c d e] &nbsp [b c d f]<br>[t k z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l o p h] &nbsp [l o p n]<br>[d e f a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p h n s] &nbsp [p h n j]<br>[h n s j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p h n s] &nbsp [p h n j]<br>[n s j u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u v w x] &nbsp [u v w y]<br>[p h n s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t k z m] &nbsp [t k z l]<br>[f a q i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m l o p] &nbsp [m l o h]<br>[s j u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t k z m] &nbsp [t k z l]<br>[g b c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[o p h n] &nbsp [l p h n]<br>[p h n s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h n s j] &nbsp [p n s j]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n s j u] &nbsp [h s j u]<br>[f a q i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j u v w] &nbsp [s u v w]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h n s j] &nbsp [p n s j]<br>[f a q i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u v w x] &nbsp [j v w x]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h n s j] &nbsp [p n s j]<br>[t k z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s j u v] &nbsp [n j u v]<br>[d e f a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f a q i] &nbsp [e a q i]<br>[j u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s j u v] &nbsp [n j u v]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[j u v w] &nbsp [j u v w x]<br>[e f a q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d e f] &nbsp [c d e f a]<br>[s j u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k z m l] &nbsp [k z m l o]<br>[b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p h n s] &nbsp [p h n s j]<br>[t k z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l o p h] &nbsp [l o p h n]<br>[j u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n s j u] &nbsp [n s j u v]<br>[k z m l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n s j u] &nbsp [n s j u v]<br>[h n s j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w x y] &nbsp [v w x y r]<br>[a q i t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h n s j] &nbsp [h n s j u]<br>[o p h n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c d e f] &nbsp [c d e f a]<br>[i t k z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[k z m m l o] &nbsp [k z m l o]<br>[i t k z z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a a q i t k] &nbsp [a q i t k]<br>[h h n s j u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[s j u v w w] &nbsp [s j u v w]<br>[d d e f a q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[z m l l o p] &nbsp [z m l o p]<br>[v w x x y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[c d d e f a] &nbsp [c d e f a]<br>[j u u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t k z m m l] &nbsp [t k z m l]<br>[g b c c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[d d e f a q] &nbsp [d e f a q]<br>[m m l o p h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a q i t k k] &nbsp [a q i t k]<br>[t k z z m l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h n s j j u] &nbsp [h n s j u]<br>[s j u u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g b c d d e] &nbsp [g b c d e]<br>[l l o p h n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[i n k z m] &nbsp [i t k z m]<br>[v w k y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z m i o p] &nbsp [z m l o p]<br>[e f a c i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a q i t j] &nbsp [a q i t k]<br>[h u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s j u v m] &nbsp [s j u v w]<br>[l b c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l a q i t] &nbsp [f a q i t]<br>[p h n s g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[z m s o p] &nbsp [z m l o p]<br>[i n s j u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s j u e w] &nbsp [s j u v w]<br>[o p a n s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a q i t x] &nbsp [a q i t k]<br>[z m d o p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f s q i] &nbsp [e f a q i]<br>[h n s e u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[p i n s j] &nbsp [p h n s j]<br>[u v w i y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[w j u v s] &nbsp [s j u v w]<br>[l o h p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c d a f e] &nbsp [c d e f a]<br>[f c d e b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[d a f e q] &nbsp [d e f a q]<br>[o s h n p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[z l m o p] &nbsp [z m l o p]<br>[m l p o h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s v u j w] &nbsp [s j u v w]<br>[o s h n p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v w r y x] &nbsp [v w x y r]<br>[w u v j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f a q t i] &nbsp [f a q i t]<br>[o l m p h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[z m p o l] &nbsp [z m l o p]<br>[m l h p o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j n s h u] &nbsp [h n s j u]<br>[a e f d q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e f q a] &nbsp [d e f a q]<br>[a f e q i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[h n s j] &nbsp [h n s u]<br>[p h n s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q i t k] &nbsp [q i t z]<br>[h n s j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n s j u] &nbsp [n s j v]<br>[i t k z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q i t k] &nbsp [q i t z]<br>[n s j u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[o p h n] &nbsp [o p h s]<br>[h n s j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v w x y] &nbsp [v w x r]<br>[u v w x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c d e f] &nbsp [c d e a]<br>[d e f a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q i t k] &nbsp [q i t z]<br>[a q i t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f a q i] &nbsp [f a q t]<br>[c d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g b c d] &nbsp [g b c e]<br>[q i t k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_5": {
    "shuffled_letters": [
      "e",
      "a",
      "b",
      "r",
      "w",
      "p",
      "n",
      "h",
      "l",
      "o"
    ],
    "shuffled_alphabet": [
      "e",
      "a",
      "c",
      "d",
      "b",
      "f",
      "g",
      "r",
      "i",
      "j",
      "k",
      "w",
      "m",
      "p",
      "n",
      "h",
      "q",
      "l",
      "s",
      "t",
      "u",
      "v",
      "o",
      "x",
      "y",
      "z"
    ],
    "succ": [
      {
        "prompt": "[r i j k] &nbsp [r i j w]<br>[e a c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h q l s] &nbsp [h q l t]<br>[i j k w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[r i j k] &nbsp [r i j w]<br>[l s t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h q l s] &nbsp [h q l t]<br>[a c d b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h q l s] &nbsp [h q l t]<br>[n h q l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k w m p] &nbsp [k w m n]<br>[p n h q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u v o x] &nbsp [u v o y]<br>[j k w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e a c d] &nbsp [e a c b]<br>[u v o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e a c d] &nbsp [e a c b]<br>[d b f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c d b f] &nbsp [c d b g]<br>[j k w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[c d b f] &nbsp [a d b f]<br>[p n h q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b f g r] &nbsp [d f g r]<br>[q l s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v o x y] &nbsp [u o x y]<br>[p n h q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h q l s] &nbsp [n q l s]<br>[k w m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t u v o] &nbsp [s u v o]<br>[c d b f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a c d b] &nbsp [e c d b]<br>[q l s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o x y z] &nbsp [v x y z]<br>[a c d b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b f g r] &nbsp [d f g r]<br>[p n h q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f g r i] &nbsp [b g r i]<br>[w m p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b f g r] &nbsp [d f g r]<br>[m p n h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[w m p n] &nbsp [w m p n h]<br>[m p n h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t u v o] &nbsp [t u v o x]<br>[f g r i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t u v o] &nbsp [t u v o x]<br>[e a c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m p n h] &nbsp [m p n h q]<br>[t u v o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r i j k] &nbsp [r i j k w]<br>[s t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k w m p] &nbsp [k w m p n]<br>[p n h q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e a c d] &nbsp [e a c d b]<br>[g r i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e a c d] &nbsp [e a c d b]<br>[p n h q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s t u v] &nbsp [s t u v o]<br>[b f g r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q l s t] &nbsp [q l s t u]<br>[f g r i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[a c c d b f] &nbsp [a c d b f]<br>[k w m p p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q l s t t u] &nbsp [q l s t u]<br>[v o o x y z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w m p p n h] &nbsp [w m p n h]<br>[e a c d b b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s t u v o o] &nbsp [s t u v o]<br>[a c d d b f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q l l s t u] &nbsp [q l s t u]<br>[e a a c d b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e a c c d b] &nbsp [e a c d b]<br>[a c d b b f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s t u v v o] &nbsp [s t u v o]<br>[f g r i i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r r i j k w] &nbsp [r i j k w]<br>[i j k k w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j j k w m p] &nbsp [j k w m p]<br>[a a c d b f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b f g r i i] &nbsp [b f g r i]<br>[c c d b f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[r i j k b] &nbsp [r i j k w]<br>[k w r p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e a c z b] &nbsp [e a c d b]<br>[v o x y f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e a c d m] &nbsp [e a c d b]<br>[i j k e m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h d b f g] &nbsp [c d b f g]<br>[w m p c h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v c d b f] &nbsp [a c d b f]<br>[e a h d b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e n c d b] &nbsp [e a c d b]<br>[g i j k w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n h m l s] &nbsp [n h q l s]<br>[m p k h q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h q l s n] &nbsp [h q l s t]<br>[k w m p u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p n h q f] &nbsp [p n h q l]<br>[h j k w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[x l s t u] &nbsp [q l s t u]<br>[a c d o f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[c f b d g] &nbsp [c d b f g]<br>[b a c d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u s t l v] &nbsp [l s t u v]<br>[w m h n p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b a c d e] &nbsp [e a c d b]<br>[a b d c f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p m n h q] &nbsp [m p n h q]<br>[e b c d a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q l t s u] &nbsp [q l s t u]<br>[p l h q n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q l t s u] &nbsp [q l s t u]<br>[m p q h n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p l h q n] &nbsp [p n h q l]<br>[w k m p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r g i j k] &nbsp [g r i j k]<br>[h s l q t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n p m h q] &nbsp [m p n h q]<br>[c a d b f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f i r g j] &nbsp [f g r i j]<br>[j k m w p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[a c d b] &nbsp [a c d f]<br>[i j k w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l s t u] &nbsp [l s t v]<br>[p n h q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a c d b] &nbsp [a c d f]<br>[h q l s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p n h q] &nbsp [p n h l]<br>[d b f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p n h q] &nbsp [p n h l]<br>[u v o x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[k w m p] &nbsp [k w m n]<br>[e a c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l s t u] &nbsp [l s t v]<br>[j k w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h q l s] &nbsp [h q l t]<br>[r i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e a c d] &nbsp [e a c b]<br>[w m p n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d b f g] &nbsp [d b f r]<br>[m p n h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_6": {
    "shuffled_letters": [
      "s",
      "o",
      "c",
      "x",
      "h",
      "t",
      "y",
      "r",
      "l",
      "m"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "s",
      "d",
      "e",
      "f",
      "g",
      "o",
      "i",
      "j",
      "k",
      "c",
      "x",
      "n",
      "h",
      "p",
      "q",
      "t",
      "y",
      "r",
      "u",
      "v",
      "w",
      "l",
      "m",
      "z"
    ],
    "succ": [
      {
        "prompt": "[t y r u] &nbsp [t y r v]<br>[f g o i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[i j k c] &nbsp [i j k x]<br>[o i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b s d e] &nbsp [b s d f]<br>[f g o i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o i j k] &nbsp [o i j c]<br>[v w l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x n h p] &nbsp [x n h q]<br>[h p q t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s d e f] &nbsp [s d e g]<br>[h p q t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g o i j] &nbsp [g o i k]<br>[f g o i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[c x n h] &nbsp [c x n p]<br>[u v w l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c x n h] &nbsp [c x n p]<br>[y r u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v w l] &nbsp [u v w m]<br>[g o i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[t y r u] &nbsp [q y r u]<br>[w l m z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c x n h] &nbsp [k x n h]<br>[g o i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w l m] &nbsp [u w l m]<br>[g o i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p q t y] &nbsp [h q t y]<br>[e f g o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q t y r] &nbsp [p t y r]<br>[o i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[x n h p] &nbsp [c n h p]<br>[e f g o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w l m] &nbsp [u w l m]<br>[o i j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f g o i] &nbsp [e g o i]<br>[v w l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b s d e] &nbsp [a s d e]<br>[r u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h p q t] &nbsp [n p q t]<br>[r u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[h p q t] &nbsp [h p q t y]<br>[q t y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g o i j] &nbsp [g o i j k]<br>[r u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h p q t] &nbsp [h p q t y]<br>[a b s d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[y r u v] &nbsp [y r u v w]<br>[e f g o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g o i j] &nbsp [g o i j k]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a b s d] &nbsp [a b s d e]<br>[r u v w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a b s d] &nbsp [a b s d e]<br>[t y r u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[j k c x] &nbsp [j k c x n]<br>[b s d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r u v w] &nbsp [r u v w l]<br>[t y r u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r u v w] &nbsp [r u v w l]<br>[u v w l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[g o o i j k] &nbsp [g o i j k]<br>[d e f g g o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q t y y r u] &nbsp [q t y r u]<br>[k c x n h h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[t y r u v v] &nbsp [t y r u v]<br>[f g o o i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k c x n n h] &nbsp [k c x n h]<br>[a a b s d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h p p q t y] &nbsp [h p q t y]<br>[s s d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c x n n h p] &nbsp [c x n h p]<br>[g o i j k k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h p q t t y] &nbsp [h p q t y]<br>[x n h p q q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e f g o i i] &nbsp [e f g o i]<br>[p q t y r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e f g g o i] &nbsp [e f g o i]<br>[q t y r r u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[r r u v w l] &nbsp [r u v w l]<br>[h p q q t y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[c x n e p] &nbsp [c x n h p]<br>[v b l m z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g o i j q] &nbsp [g o i j k]<br>[k c d n h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u v w q m] &nbsp [u v w l m]<br>[v w l m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b m d e f] &nbsp [b s d e f]<br>[p q v y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p q t y i] &nbsp [p q t y r]<br>[o h j k c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m c x n h] &nbsp [k c x n h]<br>[e k g o i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h n q t y] &nbsp [h p q t y]<br>[g o r j k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k c l n h] &nbsp [k c x n h]<br>[i j z c x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u a w l m] &nbsp [u v w l m]<br>[n h p w t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[y r u x w] &nbsp [y r u v w]<br>[o i j k v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[t v r u y] &nbsp [t y r u v]<br>[m w l v z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h n p q t] &nbsp [n h p q t]<br>[g f o i j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p q y t r] &nbsp [p q t y r]<br>[p h n q t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r v u w l] &nbsp [r u v w l]<br>[h n x p q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v y r u t] &nbsp [t y r u v]<br>[f g i o j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i f g o e] &nbsp [e f g o i]<br>[e s d b f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[r q t y p] &nbsp [p q t y r]<br>[u v m l w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m w l v z] &nbsp [v w l m z]<br>[p y t q r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[y p q t h] &nbsp [h p q t y]<br>[v l w m z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b f d e s] &nbsp [b s d e f]<br>[a b e d s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[b s d e] &nbsp [b s d f]<br>[v w l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e f g o] &nbsp [e f g i]<br>[p q t y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[k c x n] &nbsp [k c x h]<br>[d e f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c x n h] &nbsp [c x n p]<br>[q t y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d e f g] &nbsp [d e f o]<br>[s d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[x n h p] &nbsp [x n h q]<br>[k c x n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b s d e] &nbsp [b s d f]<br>[i j k c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v w l m] &nbsp [v w l z]<br>[s d e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[t y r u] &nbsp [t y r v]<br>[q t y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g o i j] &nbsp [g o i k]<br>[v w l m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  }
}