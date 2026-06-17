---
title: "Entropy Across the Bridge: Conditional-Marginal Discretization for Flow and Schrödinger Samplers"
authors:
  - Bruno Trentini
  - Dejan Stancevic
  - Michael M. Bronstein
  - Alexander Tong
  - Luca Ambrogioni
date: 2026-05-26
publication: "Preprint"
abstract: >
  For a fixed flow-based generative model under a small inference budget, sample quality can depend strongly on where the sampler spends its few function evaluations. Flow matching and Schrödinger bridges define probability paths, yet their inference grids are usually heuristic or inherited from one-endpoint diffusion. We derive a conditional-marginal entropy-rate objective for bridge-aware discretization, separating endpoint-conditioned bridge geometry from marginal flow evolution, and use it to build a training-free entropic inference-time scheduler from first principles. For Gaussian Brownian bridges this rate is closed-form and U-shaped, motivating boundary-heavy nonuniform grids. On trained two-dimensional bridge/flow models, the estimated profile recovers the predicted shape and improves 10-step ODE-Heun MMD over linear by 18.1%, with a paired 22.7% SDE-Heun improvement in the same low-NFE sweep. On EDM/CIFAR-10, the entropic time-discretization gives the best tested five-step FID (186.3 ± 4.0 versus 200.5 ± 2.9 for linear and 238.0 ± 5.3 for cosine). On AlphaFlow protein generation, entropic conditional-marginal (cond-marg) scheduling shows advantage in low-NFE regimes on both CAMEO22 and ATLAS benchmarks. These results support entropy-rate scheduling as a practical low-budget allocation signal for high-dimensional bridge and flow samplers.
urlPdf: https://arxiv.org/abs/2605.16126
links:
  - name: Paper
    url: https://arxiv.org/abs/2605.16126
---

For a fixed flow-based generative model under a small inference budget, sample quality can depend strongly on where the sampler spends its few function evaluations. Flow matching and Schrödinger bridges define probability paths, yet their inference grids are usually heuristic or inherited from one-endpoint diffusion. We derive a conditional-marginal entropy-rate objective for bridge-aware discretization, separating endpoint-conditioned bridge geometry from marginal flow evolution, and use it to build a training-free entropic inference-time scheduler from first principles. For Gaussian Brownian bridges this rate is closed-form and U-shaped, motivating boundary-heavy nonuniform grids. On trained two-dimensional bridge/flow models, the estimated profile recovers the predicted shape and improves 10-step ODE-Heun MMD over linear by 18.1%, with a paired 22.7% SDE-Heun improvement in the same low-NFE sweep. On EDM/CIFAR-10, the entropic time-discretization gives the best tested five-step FID (186.3 ± 4.0 versus 200.5 ± 2.9 for linear and 238.0 ± 5.3 for cosine). On AlphaFlow protein generation, entropic conditional-marginal (cond-marg) scheduling shows advantage in low-NFE regimes on both CAMEO22 and ATLAS benchmarks. These results support entropy-rate scheduling as a practical low-budget allocation signal for high-dimensional bridge and flow samplers.
