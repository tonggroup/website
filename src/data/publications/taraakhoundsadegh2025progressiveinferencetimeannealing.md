---
title: "Progressive Inference-Time Annealing of Diffusion Models for Sampling from Boltzmann Densities"
authors:
  - Tara Akhound-Sadegh
  - Jungyoon Lee
  - Avishek Joey Bose
  - Valentin De Bortoli
  - Arnaud Doucet
  - Michael M. Bronstein
  - Dominique Beaini
  - Siamak Ravanbakhsh
  - Kirill Neklyudov
  - Alexander Tong
date: 2025-01-01
publication: "In *NeurIPS* (spotlight)"
abstract: >
  Sampling efficiently from a target unnormalized probability density remains a core challenge, with relevance across countless high-impact scientific applications. A promising approach towards this challenge is the design of amortized samplers that borrow key ideas, such as probability path design, from state-of-the-art generative diffusion models. However, all existing diffusion-based samplers remain unable to draw samples from distributions at the scale of even simple molecular systems. In this paper, we propose Progressive Inference-Time Annealing (PITA), a novel framework to learn diffusion-based samplers that combines two complementary interpolation techniques: I.) Annealing of the Boltzmann distribution and II.) Diffusion smoothing. PITA trains a sequence of diffusion models from high to low temperatures by sequentially training each model at progressively higher temperatures, leveraging engineered easy access to samples of the temperature-annealed target density. In the subsequent step, PITA enables simulating the trained diffusion model to procure training samples at a lower temperature for the next diffusion model through inference-time annealing using a novel Feynman-Kac PDE combined with Sequential Monte Carlo. Empirically, PITA enables, for the first time, equilibrium sampling of N-body particle systems, Alanine Dipeptide, and tripeptides in Cartesian coordinates with dramatically lower energy function evaluations. Code available at: https://github.com/taraak/pita
urlPdf: https://arxiv.org/abs/2506.16471
links:
  - name: Paper
    url: https://arxiv.org/abs/2506.16471
  - name: Code
    url: https://github.com/taraak/pita
authorNotes:
  Tara Akhound-Sadegh: Equal Contribution
  Jungyoon Lee: Equal Contribution
  Kirill Neklyudov: Equal Contribution
  admin: Equal Contribution
---

Sampling efficiently from a target unnormalized probability density remains a core challenge, with relevance across countless high-impact scientific applications. A promising approach towards this challenge is the design of amortized samplers that borrow key ideas, such as probability path design, from state-of-the-art generative diffusion models. However, all existing diffusion-based samplers remain unable to draw samples from distributions at the scale of even simple molecular systems. In this paper, we propose Progressive Inference-Time Annealing (PITA), a novel framework to learn diffusion-based samplers that combines two complementary interpolation techniques: I.) Annealing of the Boltzmann distribution and II.) Diffusion smoothing. PITA trains a sequence of diffusion models from high to low temperatures by sequentially training each model at progressively higher temperatures, leveraging engineered easy access to samples of the temperature-annealed target density. In the subsequent step, PITA enables simulating the trained diffusion model to procure training samples at a lower temperature for the next diffusion model through inference-time annealing using a novel Feynman-Kac PDE combined with Sequential Monte Carlo. Empirically, PITA enables, for the first time, equilibrium sampling of N-body particle systems, Alanine Dipeptide, and tripeptides in Cartesian coordinates with dramatically lower energy function evaluations. Code available at: https://github.com/taraak/pita