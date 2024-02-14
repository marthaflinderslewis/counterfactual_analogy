var all_problems = {
  "alph_0": {
    "shuffled_letters": [
      "u",
      "n",
      "o",
      "y",
      "q",
      "l",
      "f",
      "j",
      "d",
      "h",
      "a",
      "z",
      "b",
      "e",
      "w",
      "m",
      "c",
      "i",
      "x",
      "v"
    ],
    "shuffled_alphabet": [
      "u",
      "n",
      "o",
      "y",
      "q",
      "l",
      "g",
      "f",
      "j",
      "d",
      "k",
      "h",
      "a",
      "z",
      "b",
      "p",
      "e",
      "r",
      "s",
      "t",
      "w",
      "m",
      "c",
      "i",
      "x",
      "v"
    ],
    "succ": [
      {
        "prompt": "[l g f j] &nbsp [l g f d]<br>[z b p e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u n o y] &nbsp [u n o q]<br>[g f j d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m c i x] &nbsp [m c i v]<br>[k h a z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e r s t] &nbsp [e r s w]<br>[s t w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f j d k] &nbsp [f j d h]<br>[u n o y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[o y q l] &nbsp [o y q g]<br>[t w m c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b p e r] &nbsp [b p e s]<br>[n o y q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k h a z] &nbsp [k h a b]<br>[o y q l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g f j d] &nbsp [g f j k]<br>[r s t w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o y q l] &nbsp [o y q g]<br>[h a z b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[a z b p] &nbsp [h z b p]<br>[d k h a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p e r s] &nbsp [b e r s]<br>[a z b p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[n o y q] &nbsp [u o y q]<br>[c i x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[c i x v] &nbsp [m i x v]<br>[z b p e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r s t w] &nbsp [e s t w]<br>[g f j d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m c i x] &nbsp [w c i x]<br>[e r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[t w m c] &nbsp [s w m c]<br>[e r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e r s t] &nbsp [p r s t]<br>[z b p e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[c i x v] &nbsp [m i x v]<br>[g f j d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[z b p e] &nbsp [a b p e]<br>[o y q l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[p e r s] &nbsp [p e r s t]<br>[q l g f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h a z b] &nbsp [h a z b p]<br>[y q l g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e r s t] &nbsp [e r s t w]<br>[u n o y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t w m c] &nbsp [t w m c i]<br>[u n o y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m c i x] &nbsp [m c i x v]<br>[t w m c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[t w m c] &nbsp [t w m c i]<br>[s t w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y q l g] &nbsp [y q l g f]<br>[m c i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u n o y] &nbsp [u n o y q]<br>[j d k h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[k h a z] &nbsp [k h a z b]<br>[s t w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u n o y] &nbsp [u n o y q]<br>[t w m c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[h a z b b p] &nbsp [h a z b p]<br>[p p e r s t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u n o o y q] &nbsp [u n o y q]<br>[z b p e e r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j d k k h a] &nbsp [j d k h a]<br>[z z b p e r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f f j d k h] &nbsp [f j d k h]<br>[b p e r r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m c i x x v] &nbsp [m c i x v]<br>[u u n o y q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m c i i x v] &nbsp [m c i x v]<br>[q l l g f j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p e r r s t] &nbsp [p e r s t]<br>[l l g f j d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u n o y q q] &nbsp [u n o y q]<br>[r s t w m m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[w m c i x x] &nbsp [w m c i x]<br>[g f f j d k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u u n o y q] &nbsp [u n o y q]<br>[z z b p e r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[l g f u d] &nbsp [l g f j d]<br>[i y q l g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[w m c i a] &nbsp [w m c i x]<br>[k x a z b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w o y q l] &nbsp [n o y q l]<br>[m c d x v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m c i r v] &nbsp [m c i x v]<br>[a c b p e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q l g m j] &nbsp [q l g f j]<br>[s u w m c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n o y q x] &nbsp [n o y q l]<br>[u m o y q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w m j i x] &nbsp [w m c i x]<br>[s d w m c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[u t w m c] &nbsp [s t w m c]<br>[z b d e r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p e r f t] &nbsp [p e r s t]<br>[w m c i k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q l g v j] &nbsp [q l g f j]<br>[u b p e r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[q o y n l] &nbsp [n o y q l]<br>[v c i x m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l q y g f] &nbsp [y q l g f]<br>[t w m i c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w i c m x] &nbsp [w m c i x]<br>[u n q y o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p b z e r] &nbsp [z b p e r]<br>[m c x i v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v c i x m] &nbsp [m c i x v]<br>[f q l g y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n q y o l] &nbsp [n o y q l]<br>[c w m t i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y q l f g] &nbsp [y q l g f]<br>[j f g d k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q l f g j] &nbsp [q l g f j]<br>[j d k a h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[f j d h k] &nbsp [f j d k h]<br>[r s m w t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a b z p e] &nbsp [a z b p e]<br>[q l j f g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[o y q l] &nbsp [o y q g]<br>[t w m c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g f j d] &nbsp [g f j k]<br>[m c i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l g f j] &nbsp [l g f d]<br>[g f j d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[t w m c] &nbsp [t w m i]<br>[p e r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[b p e r] &nbsp [b p e s]<br>[m c i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a z b p] &nbsp [a z b e]<br>[u n o y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u n o y] &nbsp [u n o q]<br>[b p e r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s t w m] &nbsp [s t w c]<br>[p e r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u n o y] &nbsp [u n o q]<br>[p e r s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q l g f] &nbsp [q l g j]<br>[m c i x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_1": {
    "shuffled_letters": [
      "g",
      "z",
      "y",
      "w",
      "m",
      "r",
      "d",
      "t",
      "s",
      "j",
      "e",
      "o",
      "f",
      "l",
      "u",
      "v",
      "p",
      "n",
      "q",
      "c"
    ],
    "shuffled_alphabet": [
      "a",
      "b",
      "g",
      "z",
      "y",
      "w",
      "m",
      "h",
      "i",
      "r",
      "k",
      "d",
      "t",
      "s",
      "j",
      "e",
      "o",
      "f",
      "l",
      "u",
      "v",
      "p",
      "n",
      "x",
      "q",
      "c"
    ],
    "succ": [
      {
        "prompt": "[s j e o] &nbsp [s j e f]<br>[t s j e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p n x q] &nbsp [p n x c]<br>[y w m h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p n x q] &nbsp [p n x c]<br>[g z y w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[k d t s] &nbsp [k d t j]<br>[h i r k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v p n x] &nbsp [v p n q]<br>[b g z y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p n x q] &nbsp [p n x c]<br>[z y w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s j e o] &nbsp [s j e f]<br>[w m h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[a b g z] &nbsp [a b g y]<br>[f l u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p n x q] &nbsp [p n x c]<br>[f l u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g z y w] &nbsp [g z y m]<br>[a b g z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[d t s j] &nbsp [k t s j]<br>[z y w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m h i r] &nbsp [w h i r]<br>[l u v p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[m h i r] &nbsp [w h i r]<br>[w m h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[s j e o] &nbsp [t j e o]<br>[z y w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r k d t] &nbsp [i k d t]<br>[y w m h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m h i r] &nbsp [w h i r]<br>[y w m h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s j e o] &nbsp [t j e o]<br>[g z y w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r k d t] &nbsp [i k d t]<br>[n x q c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b g z y] &nbsp [a g z y]<br>[m h i r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i r k d] &nbsp [h r k d]<br>[f l u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[u v p n] &nbsp [u v p n x]<br>[e o f l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[r k d t] &nbsp [r k d t s]<br>[v p n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w m h i] &nbsp [w m h i r]<br>[p n x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[y w m h] &nbsp [y w m h i]<br>[f l u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f l u v] &nbsp [f l u v p]<br>[m h i r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[y w m h] &nbsp [y w m h i]<br>[r k d t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l u v p] &nbsp [l u v p n]<br>[p n x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t s j e] &nbsp [t s j e o]<br>[o f l u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[p n x q] &nbsp [p n x q c]<br>[l u v p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k d t s] &nbsp [k d t s j]<br>[w m h i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[a a b g z y] &nbsp [a b g z y]<br>[e o o f l u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m h i r r k] &nbsp [m h i r k]<br>[w m h i r r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o f l u u v] &nbsp [o f l u v]<br>[p n x x q c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e o f l u u] &nbsp [e o f l u]<br>[u v v p n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p n x q c c] &nbsp [p n x q c]<br>[g z z y w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g z y y w m] &nbsp [g z y w m]<br>[m h i i r k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[j e o o f l] &nbsp [j e o f l]<br>[f l u v v p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s j e o f f] &nbsp [s j e o f]<br>[d t s j j e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s j e o f f] &nbsp [s j e o f]<br>[m m h i r k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m h i r r k] &nbsp [m h i r k]<br>[v v p n x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[e o n l u] &nbsp [e o f l u]<br>[c t s j e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g z y w q] &nbsp [g z y w m]<br>[w e o f l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l c v p n] &nbsp [l u v p n]<br>[r k b t s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m h i f k] &nbsp [m h i r k]<br>[j e o f w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f l u v b] &nbsp [f l u v p]<br>[b g z x w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f h i r k] &nbsp [m h i r k]<br>[o f l p v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[z y b m h] &nbsp [z y w m h]<br>[w m h i q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[w m l i r] &nbsp [w m h i r]<br>[a r k d t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[d t s j m] &nbsp [d t s j e]<br>[d j e o f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k v p n x] &nbsp [u v p n x]<br>[p n x y c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[e f o l u] &nbsp [e o f l u]<br>[h y w m z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y b g z a] &nbsp [a b g z y]<br>[k j t s d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i w m h y] &nbsp [y w m h i]<br>[e o u l f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q p n x v] &nbsp [v p n x q]<br>[j s t e o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[h w m y i] &nbsp [y w m h i]<br>[v l u f p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n p x q c] &nbsp [p n x q c]<br>[e o f u l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e o u l f] &nbsp [e o f l u]<br>[f u l v p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h i k r d] &nbsp [h i r k d]<br>[v q n x p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o j e s f] &nbsp [s j e o f]<br>[l u v n p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[w h m i r] &nbsp [w m h i r]<br>[v n p x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[p n x q] &nbsp [p n x c]<br>[z y w m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[p n x q] &nbsp [p n x c]<br>[b g z y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y w m h] &nbsp [y w m i]<br>[p n x q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r k d t] &nbsp [r k d s]<br>[j e o f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r k d t] &nbsp [r k d s]<br>[a b g z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p n x q] &nbsp [p n x c]<br>[i r k d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w m h i] &nbsp [w m h r]<br>[r k d t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g z y w] &nbsp [g z y m]<br>[j e o f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v p n x] &nbsp [v p n q]<br>[l u v p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[z y w m] &nbsp [z y w h]<br>[m h i r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_2": {
    "shuffled_letters": [
      "b",
      "n",
      "f",
      "m",
      "p",
      "g",
      "h",
      "w",
      "q",
      "e",
      "d",
      "l",
      "y",
      "s",
      "o",
      "c",
      "k",
      "a",
      "r",
      "j"
    ],
    "shuffled_alphabet": [
      "b",
      "n",
      "f",
      "m",
      "p",
      "g",
      "h",
      "w",
      "i",
      "q",
      "e",
      "d",
      "l",
      "y",
      "s",
      "o",
      "c",
      "k",
      "a",
      "t",
      "u",
      "v",
      "r",
      "x",
      "j",
      "z"
    ],
    "succ": [
      {
        "prompt": "[s o c k] &nbsp [s o c a]<br>[f m p g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[q e d l] &nbsp [q e d y]<br>[k a t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q e d l] &nbsp [q e d y]<br>[n f m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l y s o] &nbsp [l y s c]<br>[e d l y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l y s o] &nbsp [l y s c]<br>[n f m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[c k a t] &nbsp [c k a u]<br>[y s o c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c k a t] &nbsp [c k a u]<br>[k a t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f m p g] &nbsp [f m p h]<br>[b n f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[g h w i] &nbsp [g h w q]<br>[d l y s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[f m p g] &nbsp [f m p h]<br>[u v r x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[s o c k] &nbsp [y o c k]<br>[n f m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[e d l y] &nbsp [q d l y]<br>[y s o c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[c k a t] &nbsp [o k a t]<br>[a t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[l y s o] &nbsp [d y s o]<br>[y s o c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l y s o] &nbsp [d y s o]<br>[t u v r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a t u v] &nbsp [k t u v]<br>[h w i q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v r x j] &nbsp [u r x j]<br>[o c k a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l y s o] &nbsp [d y s o]<br>[n f m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[w i q e] &nbsp [h i q e]<br>[q e d l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o c k a] &nbsp [s c k a]<br>[a t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[g h w i] &nbsp [g h w i q]<br>[a t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f m p g] &nbsp [f m p g h]<br>[a t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q e d l] &nbsp [q e d l y]<br>[a t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[m p g h] &nbsp [m p g h w]<br>[n f m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d l y s] &nbsp [d l y s o]<br>[v r x j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n f m p] &nbsp [n f m p g]<br>[l y s o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l y s o] &nbsp [l y s o c]<br>[e d l y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n f m p] &nbsp [n f m p g]<br>[b n f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m p g h] &nbsp [m p g h w]<br>[g h w i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i q e d] &nbsp [i q e d l]<br>[b n f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[s o c k k a] &nbsp [s o c k a]<br>[m m p g h w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m p g g h w] &nbsp [m p g h w]<br>[a a t u v r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o c c k a t] &nbsp [o c k a t]<br>[v r x x j z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h h w i q e] &nbsp [h w i q e]<br>[v r x j z z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k a a t u v] &nbsp [k a t u v]<br>[f m p g g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[w i q e e d] &nbsp [w i q e d]<br>[m m p g h w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[e d l y s s] &nbsp [e d l y s]<br>[b n f f m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[v r x j z z] &nbsp [v r x j z]<br>[w i q e e d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[w i q q e d] &nbsp [w i q e d]<br>[v v r x j z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[h w i q q e] &nbsp [h w i q e]<br>[b n f m m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[f m p g o] &nbsp [f m p g h]<br>[l y s r c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[l y f o c] &nbsp [l y s o c]<br>[x i q e d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[o c x a t] &nbsp [o c k a t]<br>[a t q v r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a m p g h] &nbsp [f m p g h]<br>[j k a t u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p g z w i] &nbsp [p g h w i]<br>[a m p g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v a x j z] &nbsp [v r x j z]<br>[l y s p c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[n a m p g] &nbsp [n f m p g]<br>[w i q a d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s r c k a] &nbsp [s o c k a]<br>[y s h c k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[s o c j a] &nbsp [s o c k a]<br>[m p g h r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b n f j p] &nbsp [b n f m p]<br>[p g h t i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[h g p w i] &nbsp [p g h w i]<br>[s k c o a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b f n m p] &nbsp [b n f m p]<br>[a k t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[w i e q d] &nbsp [w i q e d]<br>[f m p h g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v u t r x] &nbsp [t u v r x]<br>[u v r j x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[s d l y e] &nbsp [e d l y s]<br>[w e q i d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f n m p g] &nbsp [n f m p g]<br>[o c t a k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[b n f p m] &nbsp [b n f m p]<br>[w h g i q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t x v r u] &nbsp [t u v r x]<br>[m f n p g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n p m f g] &nbsp [n f m p g]<br>[p i h w g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[o c a k t] &nbsp [o c k a t]<br>[w d q e i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[s o c k] &nbsp [s o c a]<br>[o c k a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m p g h] &nbsp [m p g w]<br>[q e d l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[y s o c] &nbsp [y s o k]<br>[m p g h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[v r x j] &nbsp [v r x z]<br>[b n f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y s o c] &nbsp [y s o k]<br>[d l y s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[w i q e] &nbsp [w i q d]<br>[b n f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o c k a] &nbsp [o c k t]<br>[c k a t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n f m p] &nbsp [n f m g]<br>[a t u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[h w i q] &nbsp [h w i e]<br>[v r x j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[u v r x] &nbsp [u v r j]<br>[b n f m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_3": {
    "shuffled_letters": [
      "i",
      "s",
      "f",
      "z",
      "v",
      "t",
      "c",
      "r",
      "o",
      "g",
      "e",
      "w",
      "j",
      "m",
      "x",
      "q",
      "n",
      "y",
      "a",
      "k"
    ],
    "shuffled_alphabet": [
      "i",
      "b",
      "s",
      "d",
      "f",
      "z",
      "v",
      "h",
      "t",
      "c",
      "r",
      "l",
      "o",
      "g",
      "e",
      "p",
      "w",
      "j",
      "m",
      "x",
      "u",
      "q",
      "n",
      "y",
      "a",
      "k"
    ],
    "succ": [
      {
        "prompt": "[p w j m] &nbsp [p w j x]<br>[l o g e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[x u q n] &nbsp [x u q y]<br>[w j m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[i b s d] &nbsp [i b s f]<br>[p w j m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[q n y a] &nbsp [q n y k]<br>[u q n y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[e p w j] &nbsp [e p w m]<br>[g e p w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[z v h t] &nbsp [z v h c]<br>[l o g e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[h t c r] &nbsp [h t c l]<br>[m x u q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i b s d] &nbsp [i b s f]<br>[l o g e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[q n y a] &nbsp [q n y k]<br>[w j m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[s d f z] &nbsp [s d f v]<br>[i b s d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[h t c r] &nbsp [v t c r]<br>[v h t c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[x u q n] &nbsp [m u q n]<br>[l o g e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g e p w] &nbsp [o e p w]<br>[c r l o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r l o g] &nbsp [c l o g]<br>[v h t c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q n y a] &nbsp [u n y a]<br>[d f z v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[q n y a] &nbsp [u n y a]<br>[n y a k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u q n y] &nbsp [x q n y]<br>[s d f z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[z v h t] &nbsp [f v h t]<br>[x u q n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v h t c] &nbsp [z h t c]<br>[n y a k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d f z v] &nbsp [s f z v]<br>[v h t c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[v h t c] &nbsp [v h t c r]<br>[q n y a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g e p w] &nbsp [g e p w j]<br>[s d f z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q n y a] &nbsp [q n y a k]<br>[h t c r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u q n y] &nbsp [u q n y a]<br>[q n y a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d f z v] &nbsp [d f z v h]<br>[j m x u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[m x u q] &nbsp [m x u q n]<br>[q n y a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o g e p] &nbsp [o g e p w]<br>[w j m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[d f z v] &nbsp [d f z v h]<br>[w j m x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b s d f] &nbsp [b s d f z]<br>[j m x u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[q n y a] &nbsp [q n y a k]<br>[r l o g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[h h t c r l] &nbsp [h t c r l]<br>[b s d d f z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z v h t t c] &nbsp [z v h t c]<br>[f z v h t t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q n y y a k] &nbsp [q n y a k]<br>[z z v h t c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[w j m x u u] &nbsp [w j m x u]<br>[q n y y a k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m x u q q n] &nbsp [m x u q n]<br>[q q n y a k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i i b s d f] &nbsp [i b s d f]<br>[c c r l o g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w j m x u u] &nbsp [w j m x u]<br>[q n y a a k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[f z v v h t] &nbsp [f z v h t]<br>[l o g g e p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u q n y y a] &nbsp [u q n y a]<br>[t c c r l o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g g e p w j] &nbsp [g e p w j]<br>[v h t c c r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[o z v h t] &nbsp [f z v h t]<br>[s w f z v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j m x u a] &nbsp [j m x u q]<br>[c r d o g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[g w j m x] &nbsp [p w j m x]<br>[y d f z v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r l o g u] &nbsp [r l o g e]<br>[q n y a s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[z v i t c] &nbsp [z v h t c]<br>[j m x u e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[s w j m x] &nbsp [p w j m x]<br>[e u q n y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[z v m t c] &nbsp [z v h t c]<br>[f q v h t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g x p w j] &nbsp [g e p w j]<br>[w l o g e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[r l i g e] &nbsp [r l o g e]<br>[q n o a k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[b o g e p] &nbsp [l o g e p]<br>[c a l o g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[z v t h c] &nbsp [z v h t c]<br>[w e p g j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[v h t r c] &nbsp [v h t c r]<br>[f z v t h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[l o e g p] &nbsp [l o g e p]<br>[a q n y u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d f h v z] &nbsp [d f z v h]<br>[j m q u x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[i d s b f] &nbsp [i b s d f]<br>[x w j m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p x j m w] &nbsp [p w j m x]<br>[i f s d b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m n u q x] &nbsp [m x u q n]<br>[g r l o c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p e w j m] &nbsp [e p w j m]<br>[i b d s f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[x u q y n] &nbsp [x u q n y]<br>[m w j p x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[e p m j w] &nbsp [e p w j m]<br>[t v h z c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[h t c r] &nbsp [h t c l]<br>[c r l o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m x u q] &nbsp [m x u n]<br>[i b s d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j m x u] &nbsp [j m x q]<br>[i b s d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g e p w] &nbsp [g e p j]<br>[q n y a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x u q n] &nbsp [x u q y]<br>[i b s d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[g e p w] &nbsp [g e p j]<br>[v h t c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[l o g e] &nbsp [l o g p]<br>[z v h t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b s d f] &nbsp [b s d z]<br>[c r l o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v h t c] &nbsp [v h t r]<br>[t c r l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[x u q n] &nbsp [x u q y]<br>[s d f z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_4": {
    "shuffled_letters": [
      "w",
      "p",
      "z",
      "b",
      "a",
      "s",
      "j",
      "g",
      "x",
      "o",
      "m",
      "n",
      "t",
      "k",
      "f",
      "i",
      "q",
      "y",
      "r",
      "l"
    ],
    "shuffled_alphabet": [
      "w",
      "p",
      "c",
      "d",
      "e",
      "z",
      "b",
      "h",
      "a",
      "s",
      "j",
      "g",
      "x",
      "o",
      "m",
      "n",
      "t",
      "k",
      "f",
      "i",
      "u",
      "v",
      "q",
      "y",
      "r",
      "l"
    ],
    "succ": [
      {
        "prompt": "[w p c d] &nbsp [w p c e]<br>[k f i u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n t k f] &nbsp [n t k i]<br>[h a s j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e z b h] &nbsp [e z b a]<br>[m n t k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e z b h] &nbsp [e z b a]<br>[f i u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x o m n] &nbsp [x o m t]<br>[s j g x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[f i u v] &nbsp [f i u q]<br>[v q y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[o m n t] &nbsp [o m n k]<br>[n t k f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[b h a s] &nbsp [b h a j]<br>[j g x o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[w p c d] &nbsp [w p c e]<br>[j g x o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g x o m] &nbsp [g x o n]<br>[i u v q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[t k f i] &nbsp [n k f i]<br>[d e z b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u v q y] &nbsp [i v q y]<br>[f i u v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[z b h a] &nbsp [e b h a]<br>[s j g x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j g x o] &nbsp [s g x o]<br>[s j g x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[f i u v] &nbsp [k i u v]<br>[m n t k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[x o m n] &nbsp [g o m n]<br>[g x o m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[c d e z] &nbsp [p d e z]<br>[o m n t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h a s j] &nbsp [b a s j]<br>[a s j g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o m n t] &nbsp [x m n t]<br>[u v q y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[a s j g] &nbsp [h s j g]<br>[c d e z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[s j g x] &nbsp [s j g x o]<br>[w p c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t k f i] &nbsp [t k f i u]<br>[a s j g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[a s j g] &nbsp [a s j g x]<br>[d e z b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[h a s j] &nbsp [h a s j g]<br>[n t k f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t k f i] &nbsp [t k f i u]<br>[v q y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v q y r] &nbsp [v q y r l]<br>[d e z b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a s j g] &nbsp [a s j g x]<br>[e z b h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[s j g x] &nbsp [s j g x o]<br>[c d e z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[z b h a] &nbsp [z b h a s]<br>[w p c d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v q y r] &nbsp [v q y r l]<br>[c d e z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[v v q y r l] &nbsp [v q y r l]<br>[p c d e e z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[a s s j g x] &nbsp [a s j g x]<br>[i u v v q y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[d e z z b h] &nbsp [d e z b h]<br>[s j g x x o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[d e e z b h] &nbsp [d e z b h]<br>[h a s j g g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v q y r r l] &nbsp [v q y r l]<br>[f i u u v q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p c c d e z] &nbsp [p c d e z]<br>[d e z b b h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s s j g x o] &nbsp [s j g x o]<br>[k f i u v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[i u u v q y] &nbsp [i u v q y]<br>[m n t k k f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m m n t k f] &nbsp [m n t k f]<br>[s j g x o o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[w w p c d e] &nbsp [w p c d e]<br>[x o m n n t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[f i h v q] &nbsp [f i u v q]<br>[j g x o b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z b h l s] &nbsp [z b h a s]<br>[i u v q j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[f e u v q] &nbsp [f i u v q]<br>[d e z b y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[j g x y m] &nbsp [j g x o m]<br>[q t k f i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[l a s j g] &nbsp [h a s j g]<br>[w p c d z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[a s f g x] &nbsp [a s j g x]<br>[a k f i u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[g x o e n] &nbsp [g x o m n]<br>[m n b k f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t k j i u] &nbsp [t k f i u]<br>[z b d a s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e z f h a] &nbsp [e z b h a]<br>[j g x e m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m a t k f] &nbsp [m n t k f]<br>[h a s o g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[n x o m g] &nbsp [g x o m n]<br>[o m t n k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[j g m o x] &nbsp [j g x o m]<br>[f n t k m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p e d c z] &nbsp [p c d e z]<br>[m f t k n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g o x m n] &nbsp [g x o m n]<br>[v q r y l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[g m o x n] &nbsp [g x o m n]<br>[m f t k n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[j g m o x] &nbsp [j g x o m]<br>[q u v i y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[w p c e d] &nbsp [w p c d e]<br>[m o x n t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[g x n m o] &nbsp [g x o m n]<br>[o m k t n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o g x j m] &nbsp [j g x o m]<br>[u f i k v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g x o n m] &nbsp [g x o m n]<br>[c p w d e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[t k f i] &nbsp [t k f u]<br>[a s j g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t k f i] &nbsp [t k f u]<br>[n t k f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[b h a s] &nbsp [b h a j]<br>[v q y r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f i u v] &nbsp [f i u q]<br>[s j g x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[m n t k] &nbsp [m n t f]<br>[k f i u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[w p c d] &nbsp [w p c e]<br>[a s j g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[a s j g] &nbsp [a s j x]<br>[x o m n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e z b h] &nbsp [e z b a]<br>[a s j g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[e z b h] &nbsp [e z b a]<br>[b h a s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d e z b] &nbsp [d e z h]<br>[c d e z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_5": {
    "shuffled_letters": [
      "r",
      "y",
      "t",
      "b",
      "n",
      "x",
      "s",
      "z",
      "p",
      "d",
      "u",
      "v",
      "o",
      "g",
      "i",
      "k",
      "h",
      "l",
      "w",
      "c"
    ],
    "shuffled_alphabet": [
      "a",
      "r",
      "y",
      "t",
      "e",
      "f",
      "b",
      "n",
      "x",
      "j",
      "s",
      "z",
      "m",
      "p",
      "d",
      "u",
      "q",
      "v",
      "o",
      "g",
      "i",
      "k",
      "h",
      "l",
      "w",
      "c"
    ],
    "succ": [
      {
        "prompt": "[a r y t] &nbsp [a r y e]<br>[n x j s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n x j s] &nbsp [n x j z]<br>[a r y t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[z m p d] &nbsp [z m p u]<br>[x j s z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[o g i k] &nbsp [o g i h]<br>[m p d u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[r y t e] &nbsp [r y t f]<br>[k h l w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[u q v o] &nbsp [u q v g]<br>[k h l w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[z m p d] &nbsp [z m p u]<br>[u q v o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e f b n] &nbsp [e f b x]<br>[q v o g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b n x j] &nbsp [b n x s]<br>[d u q v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[k h l w] &nbsp [k h l c]<br>[u q v o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[z m p d] &nbsp [s m p d]<br>[m p d u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[y t e f] &nbsp [r t e f]<br>[k h l w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[h l w c] &nbsp [k l w c]<br>[j s z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b n x j] &nbsp [f n x j]<br>[m p d u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p d u q] &nbsp [m d u q]<br>[h l w c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p d u q] &nbsp [m d u q]<br>[s z m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y t e f] &nbsp [r t e f]<br>[f b n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m p d u] &nbsp [z p d u]<br>[f b n x] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[o g i k] &nbsp [v g i k]<br>[n x j s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[g i k h] &nbsp [o i k h]<br>[b n x j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[a r y t] &nbsp [a r y t e]<br>[j s z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[f b n x] &nbsp [f b n x j]<br>[b n x j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e f b n] &nbsp [e f b n x]<br>[k h l w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a r y t] &nbsp [a r y t e]<br>[d u q v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[q v o g] &nbsp [q v o g i]<br>[m p d u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[e f b n] &nbsp [e f b n x]<br>[v o g i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k h l w] &nbsp [k h l w c]<br>[j s z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[r y t e] &nbsp [r y t e f]<br>[b n x j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[j s z m] &nbsp [j s z m p]<br>[u q v o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v o g i] &nbsp [v o g i k]<br>[e f b n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[a r y y t e] &nbsp [a r y t e]<br>[b n n x j s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[b b n x j s] &nbsp [b n x j s]<br>[m p p d u q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q v o o g i] &nbsp [q v o g i]<br>[v v o g i k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[b n n x j s] &nbsp [b n x j s]<br>[x j j s z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p d u q v v] &nbsp [p d u q v]<br>[y t e f f b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p d d u q v] &nbsp [p d u q v]<br>[r y y t e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[x j s z z m] &nbsp [x j s z m]<br>[o g i k k h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p d u q q v] &nbsp [p d u q v]<br>[k h l w w c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b b n x j s] &nbsp [b n x j s]<br>[x j s s z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[j j s z m p] &nbsp [j s z m p]<br>[a a r y t e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[g e f b n] &nbsp [t e f b n]<br>[y t e f j] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[z m p x u] &nbsp [z m p d u]<br>[i n x j s] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v q g i k] &nbsp [v o g i k]<br>[m r y t e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[w q v o g] &nbsp [u q v o g]<br>[y d e f b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[k h l t c] &nbsp [k h l w c]<br>[c k h l w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[b o x j s] &nbsp [b n x j s]<br>[n w j s z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[z m p d f] &nbsp [z m p d u]<br>[y t e i b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[e f b n z] &nbsp [e f b n x]<br>[z m b d u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[u q v s g] &nbsp [u q v o g]<br>[p d b q v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[v b n x j] &nbsp [f b n x j]<br>[k h l a c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[q v g o i] &nbsp [q v o g i]<br>[p z m s d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[g v o q i] &nbsp [q v o g i]<br>[s d m p z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[q o v g i] &nbsp [q v o g i]<br>[x f b n e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[e r y t a] &nbsp [a r y t e]<br>[z s j m p] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[z s m p d] &nbsp [s z m p d]<br>[t y r e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[n z j s x] &nbsp [n x j s z]<br>[j s z p m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u v q o g] &nbsp [u q v o g]<br>[b t e f y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[p z m s d] &nbsp [s z m p d]<br>[a r y e t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n e f b t] &nbsp [t e f b n]<br>[w h l k c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t b f e n] &nbsp [t e f b n]<br>[n j x s z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[d u q v] &nbsp [d u q o]<br>[g i k h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m p d u] &nbsp [m p d q]<br>[e f b n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[j s z m] &nbsp [j s z p]<br>[a r y t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[g i k h] &nbsp [g i k l]<br>[x j s z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[y t e f] &nbsp [y t e b]<br>[x j s z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v o g i] &nbsp [v o g k]<br>[j s z m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[k h l w] &nbsp [k h l c]<br>[x j s z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[k h l w] &nbsp [k h l c]<br>[r y t e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[z m p d] &nbsp [z m p u]<br>[k h l w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[n x j s] &nbsp [n x j z]<br>[y t e f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  },
  "alph_6": {
    "shuffled_letters": [
      "x",
      "p",
      "j",
      "h",
      "n",
      "a",
      "u",
      "d",
      "q",
      "c",
      "t",
      "f",
      "s",
      "b",
      "g",
      "y",
      "e",
      "z",
      "l",
      "o"
    ],
    "shuffled_alphabet": [
      "x",
      "p",
      "j",
      "h",
      "n",
      "a",
      "u",
      "d",
      "i",
      "q",
      "k",
      "c",
      "m",
      "t",
      "f",
      "s",
      "b",
      "r",
      "g",
      "y",
      "e",
      "v",
      "w",
      "z",
      "l",
      "o"
    ],
    "succ": [
      {
        "prompt": "[m t f s] &nbsp [m t f b]<br>[i q k c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[t f s b] &nbsp [t f s r]<br>[h n a u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w z l] &nbsp [v w z o]<br>[c m t f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[f s b r] &nbsp [f s b g]<br>[g y e v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x p j h] &nbsp [x p j n]<br>[f s b r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d i q k] &nbsp [d i q c]<br>[x p j h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[p j h n] &nbsp [p j h a]<br>[v w z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[m t f s] &nbsp [m t f b]<br>[v w z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[v w z l] &nbsp [v w z o]<br>[p j h n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[j h n a] &nbsp [j h n u]<br>[v w z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "pred": [
      {
        "prompt": "[j h n a] &nbsp [p h n a]<br>[v w z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[m t f s] &nbsp [c t f s]<br>[d i q k] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[v w z l] &nbsp [e w z l]<br>[w z l o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[r g y e] &nbsp [b g y e]<br>[b r g y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[t f s b] &nbsp [m f s b]<br>[u d i q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[p j h n] &nbsp [x j h n]<br>[t f s b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[y e v w] &nbsp [g e v w]<br>[h n a u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[t f s b] &nbsp [m f s b]<br>[e v w z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n a u d] &nbsp [h a u d]<br>[h n a u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[d i q k] &nbsp [u i q k]<br>[f s b r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "add_letter": [
      {
        "prompt": "[s b r g] &nbsp [s b r g y]<br>[k c m t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[n a u d] &nbsp [n a u d i]<br>[i q k c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p j h n] &nbsp [p j h n a]<br>[t f s b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[x p j h] &nbsp [x p j h n]<br>[i q k c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x p j h] &nbsp [x p j h n]<br>[e v w z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i q k c] &nbsp [i q k c m]<br>[b r g y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[u d i q] &nbsp [u d i q k]<br>[q k c m] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[q k c m] &nbsp [q k c m t]<br>[e v w z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[m t f s] &nbsp [m t f s b]<br>[x p j h] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[t f s b] &nbsp [t f s b r]<br>[u d i q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "remove_redundant": [
      {
        "prompt": "[y e v w w z] &nbsp [y e v w z]<br>[q k c c m t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u d d i q k] &nbsp [u d i q k]<br>[v w z l l o] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p j h h n a] &nbsp [p j h n a]<br>[n n a u d i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[x p p j h n] &nbsp [x p j h n]<br>[m m t f s b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[d i q k c c] &nbsp [d i q k c]<br>[y e v w w z] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[v v w z l o] &nbsp [v w z l o]<br>[j h h n a u] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[m t f f s b] &nbsp [m t f s b]<br>[b r g y y e] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[n a u d i i] &nbsp [n a u d i]<br>[r g y e v v] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[n a u u d i] &nbsp [n a u d i]<br>[f s b r r g] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c c m t f s] &nbsp [c m t f s]<br>[d i q q k c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "fix_alphabet": [
      {
        "prompt": "[c m t n s] &nbsp [c m t f s]<br>[q p c m t] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[u d y q k] &nbsp [u d i q k]<br>[m t y s b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[e v w b l] &nbsp [e v w z l]<br>[c m t f r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[p l h n a] &nbsp [p j h n a]<br>[h n v u d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[x p j h v] &nbsp [x p j h n]<br>[a f d i q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[l j h n a] &nbsp [p j h n a]<br>[n k u d i] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[f s w r g] &nbsp [f s b r g]<br>[d v q k c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l n a u d] &nbsp [h n a u d]<br>[m t f g b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a l d i q] &nbsp [a u d i q]<br>[x p j h r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[i q r c m] &nbsp [i q k c m]<br>[s b r k y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "sort": [
      {
        "prompt": "[d i q c k] &nbsp [d i q k c]<br>[b r g e y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[c s t f m] &nbsp [c m t f s]<br>[d i c k q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[u d i k q] &nbsp [u d i q k]<br>[v w z o l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[a h n j u] &nbsp [j h n a u]<br>[n h a u d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[v w o l z] &nbsp [v w z l o]<br>[k m c t f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[i d u q k] &nbsp [u d i q k]<br>[k t m c f] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[v w l z o] &nbsp [v w z l o]<br>[q k t m c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[l w z v o] &nbsp [v w z l o]<br>[t k c m q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[a u q i d] &nbsp [a u d i q]<br>[v o z l w] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[m s f t b] &nbsp [m t f s b]<br>[u n a h d] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ],
    "attn": [
      {
        "prompt": "[v w z l] &nbsp [v w z o]<br>[f s b r] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 0
      },
      {
        "prompt": "[h n a u] &nbsp [h n a d]<br>[p j h n] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 1
      },
      {
        "prompt": "[p j h n] &nbsp [p j h a]<br>[t f s b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 2
      },
      {
        "prompt": "[u d i q] &nbsp [u d i k]<br>[t f s b] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 3
      },
      {
        "prompt": "[p j h n] &nbsp [p j h a]<br>[b r g y] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 4
      },
      {
        "prompt": "[d i q k] &nbsp [d i q c]<br>[i q k c] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 5
      },
      {
        "prompt": "[s b r g] &nbsp [s b r y]<br>[v w z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 6
      },
      {
        "prompt": "[h n a u] &nbsp [h n a d]<br>[v w z l] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 7
      },
      {
        "prompt": "[b r g y] &nbsp [b r g e]<br>[u d i q] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 8
      },
      {
        "prompt": "[c m t f] &nbsp [c m t s]<br>[j h n a] &nbsp [&nbsp ? &nbsp]",
        "prob_ind": 9
      }
    ]
  }
}