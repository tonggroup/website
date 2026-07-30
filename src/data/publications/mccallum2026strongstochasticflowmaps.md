---
title: "Strong Stochastic Flow Maps"
authors:
  - Sam McCallum
  - Zander W. Blasingame
  - Timothy Herschell
  - Niklas Rindtorff
  - Alexander Tong
  - James Foster
date: 2026-06-01
publication: "In *ICML 2026 Workshop on Structured Probabilistic Inference & Generative Modeling (SPIGM)*"
abstract: >
  Flow and diffusion models generate high-quality samples in many modalities; however, many network evaluations are required during inference due to numerical integration of an underlying differential equation. Flow maps alleviate this problem by learning the solution map of the differential equation directly, enabling few-step sampling. Yet, current methods are restricted to approximating the solution map of ODEs. These methods can be used to learn the transition kernel of an SDE, thereby obtaining a solution map that recovers the marginal distributions of the process (weak convergence) rather than the solution path (strong convergence). We propose Strong Stochastic Flow Maps (SSFMs) as a novel framework for learning the strong solution map of additive-noise SDEs, directly generalizing deterministic flow maps to the stochastic setting. Further, a polynomial approximation to Brownian motion is introduced and shown to converge pathwise. These results enable a simulation-free training objective for the solution map of diffusion models. We demonstrate that SSFMs outperform previous stochastic flow map methods on image generation and enable few-step sampling of molecular systems.
urlPdf: https://arxiv.org/abs/2606.01086
links:
  - name: Paper
    url: https://arxiv.org/abs/2606.01086
  - name: Code
    url: https://github.com/sammccallum/ssfm
  - name: Slides
    url: https://zblasingame.github.io/slides/ssfm/slides.html
authorNotes:
  Sam McCallum: Equal Contribution
  Zander W. Blasingame: Equal Contribution
  admin: Equal Contribution
  James Foster: Equal Contribution
---

Flow and diffusion models generate high-quality samples in many modalities; however, many network evaluations are required during inference due to numerical integration of an underlying differential equation. Flow maps alleviate this problem by learning the solution map of the differential equation directly, enabling few-step sampling. Yet, current methods are restricted to approximating the solution map of ODEs. These methods can be used to learn the transition kernel of an SDE, thereby obtaining a solution map that recovers the marginal distributions of the process (weak convergence) rather than the solution path (strong convergence). We propose Strong Stochastic Flow Maps (SSFMs) as a novel framework for learning the strong solution map of additive-noise SDEs, directly generalizing deterministic flow maps to the stochastic setting. Further, a polynomial approximation to Brownian motion is introduced and shown to converge pathwise. These results enable a simulation-free training objective for the solution map of diffusion models. We demonstrate that SSFMs outperform previous stochastic flow map methods on image generation and enable few-step sampling of molecular systems.
