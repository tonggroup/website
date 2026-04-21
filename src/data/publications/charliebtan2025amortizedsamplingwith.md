---
title: "Amortized Sampling with Transferable Normalizing Flows"
authors:
  - Charlie B. Tan
  - Majdi Hassan
  - Leon Klein
  - Saifuddin Syed
  - Dominique Beaini
  - Michael M. Bronstein
  - Alexander Tong
  - Kirill Neklyudov
date: 2025-01-01
publication: "In *NeurIPS*"
abstract: >
  Efficient equilibrium sampling of molecular conformations remains a core challenge in computational chemistry and statistical inference. Classical approaches such as molecular dynamics or Markov chain Monte Carlo inherently lack amortization; the computational cost of sampling must be paid in full for each system of interest. The widespread success of generative models has inspired interest towards overcoming this limitation through learning sampling algorithms. Despite performing competitively with conventional methods when trained on a single system, learned samplers have so far demonstrated limited ability to transfer across systems. We demonstrate that deep learning enables the design of scalable and transferable samplers by introducing Prose, a 285 million parameter all-atom transferable normalizing flow trained on a corpus of peptide molecular dynamics trajectories up to 8 residues in length. Prose draws zero-shot uncorrelated proposal samples for arbitrary peptide systems, achieving the previously intractable transferability across sequence length, whilst retaining the efficient likelihood evaluation of normalizing flows. Through extensive empirical evaluation we demonstrate the efficacy of Prose as a proposal for a variety of sampling algorithms, finding a simple importance sampling-based finetuning procedure to achieve competitive performance to established methods such as sequential Monte Carlo. We open-source the Prose codebase, model weights, and training dataset, to further stimulate research into amortized sampling methods and finetuning objectives.
urlPdf: https://arxiv.org/abs/2508.18175
links:
  - name: Paper
    url: https://arxiv.org/abs/2508.18175
  - name: Code
    url: https://github.com/transferable-samplers/transferable-samplers
authorNotes:
  Charlie B. Tan: Equal Contribution
  Majdi Hassan: Equal Contribution
  admin: Equal Contribution
  Kirill Neklyudov: Equal Contribution
---

Efficient equilibrium sampling of molecular conformations remains a core challenge in computational chemistry and statistical inference. Classical approaches such as molecular dynamics or Markov chain Monte Carlo inherently lack amortization; the computational cost of sampling must be paid in full for each system of interest. The widespread success of generative models has inspired interest towards overcoming this limitation through learning sampling algorithms. Despite performing competitively with conventional methods when trained on a single system, learned samplers have so far demonstrated limited ability to transfer across systems. We demonstrate that deep learning enables the design of scalable and transferable samplers by introducing Prose, a 285 million parameter all-atom transferable normalizing flow trained on a corpus of peptide molecular dynamics trajectories up to 8 residues in length. Prose draws zero-shot uncorrelated proposal samples for arbitrary peptide systems, achieving the previously intractable transferability across sequence length, whilst retaining the efficient likelihood evaluation of normalizing flows. Through extensive empirical evaluation we demonstrate the efficacy of Prose as a proposal for a variety of sampling algorithms, finding a simple importance sampling-based finetuning procedure to achieve competitive performance to established methods such as sequential Monte Carlo. We open-source the Prose codebase, model weights, and training dataset, to further stimulate research into amortized sampling methods and finetuning objectives.