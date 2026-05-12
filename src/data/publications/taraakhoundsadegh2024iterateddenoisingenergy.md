---
title: "Iterated Denoising Energy Matching for Sampling from Boltzmann Densities"
authors:
  - Tara Akhound-Sadegh
  - Jarrid Rector-Brooks
  - Avishek Joey Bose
  - Sarthak Mittal
  - Pablo Lemos
  - Cheng-Hao Liu
  - Marcin Sendera
  - Siamak Ravanbakhsh
  - Gauthier Gidel
  - Yoshua Bengio
  - Nikolay Malkin
  - Alexander Tong
date: 2024-01-01
publication: "In *ICML 2024*"
abstract: >
  Efficiently generating statistically independent samples from an unnormalized probability distribution, such as equilibrium samples of many-body systems, is a foundational problem in science. In this paper, we propose Iterated Denoising Energy Matching (iDEM), an iterative algorithm that uses a novel stochastic score matching objective leveraging solely the energy function and its gradient -- and no data samples -- to train a diffusion-based sampler. Specifically, iDEM alternates between (I) sampling regions of high model density from a diffusion-based sampler and (II) using these samples in our stochastic matching objective to further improve the sampler. iDEM is scalable to high dimensions as the inner matching objective, is simulation-free, and requires no MCMC samples. Moreover, by leveraging the fast mode mixing behavior of diffusion, iDEM smooths out the energy landscape enabling efficient exploration and learning of an amortized sampler. We evaluate iDEM on a suite of tasks ranging from standard synthetic energy functions to invariant n-body particle systems. We show that the proposed approach achieves state-of-the-art performance on all metrics and trains 2−5× faster, which allows it to be the first method to train using energy on the challenging 55-particle Lennard-Jones system.
urlPdf: https://arxiv.org/abs/2402.06121
links:
  - name: Paper
    url: https://arxiv.org/abs/2402.06121
  - name: Code
    url: https://github.com/jarridrb/dem
authorNotes:
  Tara Akhound-Sadegh: Equal Contribution
  Jarrid Rector-Brooks: Equal Contribution
  Avishek Joey Bose: Equal Contribution
---

Efficiently generating statistically independent samples from an unnormalized probability distribution, such as equilibrium samples of many-body systems, is a foundational problem in science. In this paper, we propose Iterated Denoising Energy Matching (iDEM), an iterative algorithm that uses a novel stochastic score matching objective leveraging solely the energy function and its gradient -- and no data samples -- to train a diffusion-based sampler. Specifically, iDEM alternates between (I) sampling regions of high model density from a diffusion-based sampler and (II) using these samples in our stochastic matching objective to further improve the sampler. iDEM is scalable to high dimensions as the inner matching objective, is simulation-free, and requires no MCMC samples. Moreover, by leveraging the fast mode mixing behavior of diffusion, iDEM smooths out the energy landscape enabling efficient exploration and learning of an amortized sampler. We evaluate iDEM on a suite of tasks ranging from standard synthetic energy functions to invariant n-body particle systems. We show that the proposed approach achieves state-of-the-art performance on all metrics and trains 2−5× faster, which allows it to be the first method to train using energy on the challenging 55-particle Lennard-Jones system.