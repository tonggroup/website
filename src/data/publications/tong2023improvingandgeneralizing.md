---
title: "Improving and Generalizing Flow-Based Generative Models with Minibatch Optimal Transport"
authors:
  - Alexander Tong
  - Nikolay Malkin
  - Guillaume Huguet
  - Yanlei Zhang
  - Jarrid Rector-Brooks
  - Kilian Fatras
  - Guy Wolf
  - Yoshua Bengio
date: 2023-01-01
publication: "In *TMLR*   Also presented at Frontiers4LCD Workshop @ ICML 2023"
abstract: >
  Continuous normalizing flows (CNFs) are an attractive generative modeling technique, but they have been held back by limitations in their simulation-based maximum likelihood training. We introduce the generalized conditional flow matching (CFM) technique, a family of simulation-free training objectives for CNFs. CFM features a stable regression objective like that used to train the stochastic flow in diffusion models but enjoys the efficient inference of deterministic flow models. In contrast to both diffusion models and prior CNF training algorithms, CFM does not require the source distribution to be Gaussian or require evaluation of its density. A variant of our objective is optimal transport CFM (OT-CFM), which creates simpler flows that are more stable to train and lead to faster inference, as evaluated in our experiments. Furthermore, OT-CFM is the first method to compute dynamic OT in a simulation-free way. Training CNFs with CFM improves results on a variety of conditional and unconditional generation tasks, such as inferring single cell dynamics, unsupervised image translation, and Schrödinger bridge inference.
urlPdf: https://arxiv.org/abs/2302.00482
links:
  - name: Paper
    url: https://arxiv.org/abs/2302.00482
  - name: Code
    url: https://github.com/atong01/conditional-flow-matching
---

Continuous normalizing flows (CNFs) are an attractive generative modeling technique, but they have been held back by limitations in their simulation-based maximum likelihood training. We introduce the generalized conditional flow matching (CFM) technique, a family of simulation-free training objectives for CNFs. CFM features a stable regression objective like that used to train the stochastic flow in diffusion models but enjoys the efficient inference of deterministic flow models. In contrast to both diffusion models and prior CNF training algorithms, CFM does not require the source distribution to be Gaussian or require evaluation of its density. A variant of our objective is optimal transport CFM (OT-CFM), which creates simpler flows that are more stable to train and lead to faster inference, as evaluated in our experiments. Furthermore, OT-CFM is the first method to compute dynamic OT in a simulation-free way. Training CNFs with CFM improves results on a variety of conditional and unconditional generation tasks, such as inferring single cell dynamics, unsupervised image translation, and Schrödinger bridge inference.