---
title: Sampling and Boltzmann Generators
description: Developing generative models for sampling from Boltzmann distributions—combining normalizing flows, diffusion, and autoregressive models to generate equilibrium samples of molecular systems.
status: active
tags:
  - boltzmann-generators
  - molecular-sampling
  - normalizing-flows
  - statistical-physics
image: ../../assets/research/boltzmann-generators.png
gif: /research/robin.gif
members:
  - zander-blasingame
  - charlie-tan
  - danyal-rehman
  - niklas-rindtorff
publications:
  - taraakhoundsadegh2024iterateddenoisingenergy
  - taraakhoundsadegh2025progressiveinferencetimeannealing
  - charliebtan2025scalableequilibriumsampling
  - charliebtan2025amortizedsamplingwith
  - danyalrehman2025falconfewstepaccurate
  - danyalrehman2025fortforwardonlyregression
  - rehman2026autoregressiveboltzmanngenerators
---

Boltzmann Generators pair generative models with exact likelihoods and importance sampling to rapidly generate uncorrelated equilibrium samples from molecular systems at thermodynamic equilibrium. This is a hallmark challenge in statistical physics with direct applications to drug discovery and molecular dynamics.

![Boltzmann generator sampling a molecular system](/research/robin.gif)

Our group has pioneered several advances in this area: iterated denoising energy matching (iDEM) and progressive inference-time annealing (PITA) for sampling from Boltzmann densities without differentiating the target potential, sequential Boltzmann generators for scalable equilibrium sampling, and amortized sampling with transferable normalizing flows (Prose).

## Key Directions

- **Diffusion-Based Samplers**: Iterated denoising energy matching and progressive inference-time annealing for Boltzmann densities
- **Scalable Boltzmann Generators**: Sequential and transferable normalizing flows for equilibrium sampling of molecular systems
- **Efficient Likelihoods**: Few-step accurate likelihoods for continuous flows (FALCON) and forward-only regression training (FORT)
- **Autoregressive Approaches**: Departing from flow-based paradigms to leverage autoregressive architectures from large language models (ArBG)
- **Amortized Sampling**: Transferable normalizing flows for amortized sampling across molecular systems (Prose)
