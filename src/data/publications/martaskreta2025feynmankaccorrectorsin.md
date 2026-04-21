---
title: "Feynman-Kac Correctors in Diffusion: Annealing, Guidance, and Product of Experts"
authors:
  - Marta Skreta
  - Tara Akhound-Sadegh
  - Viktor Ohanesian
  - Roberto Bondesan
  - Alán Aspuru-Guzik
  - Arnaud Doucet
  - Rob Brekelmans
  - Alexander Tong
  - Kirill Neklyudov
date: 2025-01-01
publication: "In *ICML* (spotlight)"
abstract: >
  While score-based generative models are the model of choice across diverse domains, there are limited tools available for controlling inference-time behavior in a principled manner, e.g. for composing multiple pretrained models. Existing classifier-free guidance methods use a simple heuristic to mix conditional and unconditional scores to approximately sample from conditional distributions. However, such methods do not approximate the intermediate distributions, necessitating additional 'corrector' steps. In this work, we provide an efficient and principled method for sampling from a sequence of annealed, geometric-averaged, or product distributions derived from pretrained score-based models. We derive a weighted simulation scheme which we call Feynman-Kac Correctors (FKCs) based on the celebrated Feynman-Kac formula by carefully accounting for terms in the appropriate partial differential equations (PDEs). To simulate these PDEs, we propose Sequential Monte Carlo (SMC) resampling algorithms that leverage inference-time scaling to improve sampling quality. We empirically demonstrate the utility of our methods by proposing amortized sampling via inference-time temperature annealing, improving multi-objective molecule generation using pretrained models, and improving classifier-free guidance for text-to-image generation.
urlPdf: https://arxiv.org/pdf/2503.02819
links:
  - name: Paper
    url: https://arxiv.org/pdf/2503.02819
  - name: Code
    url: https://github.com/martaskrt/fkc-diffusion
authorNotes:
  Marta Skreta: Equal Contribution
  Tara Akhound-Sadegh: Equal Contribution
  Viktor Ohanesian: Equal Contribution
  admin: Equal Contribution
  Kirill Neklyudov: Equal Contribution
---

While score-based generative models are the model of choice across diverse domains, there are limited tools available for controlling inference-time behavior in a principled manner, e.g. for composing multiple pretrained models. Existing classifier-free guidance methods use a simple heuristic to mix conditional and unconditional scores to approximately sample from conditional distributions. However, such methods do not approximate the intermediate distributions, necessitating additional 'corrector' steps. In this work, we provide an efficient and principled method for sampling from a sequence of annealed, geometric-averaged, or product distributions derived from pretrained score-based models. We derive a weighted simulation scheme which we call Feynman-Kac Correctors (FKCs) based on the celebrated Feynman-Kac formula by carefully accounting for terms in the appropriate partial differential equations (PDEs). To simulate these PDEs, we propose Sequential Monte Carlo (SMC) resampling algorithms that leverage inference-time scaling to improve sampling quality. We empirically demonstrate the utility of our methods by proposing amortized sampling via inference-time temperature annealing, improving multi-objective molecule generation using pretrained models, and improving classifier-free guidance for text-to-image generation.