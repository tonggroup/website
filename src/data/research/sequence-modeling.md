---
title: Sequence Modeling
description: Developing generative models for discrete sequences—including diffusion language models, masked discrete diffusion, and one-step discrete generation—for language modeling and biological sequence design.
status: active
tags:
  - discrete-diffusion
  - language-models
  - sequence-generation
  - generative-modeling
image: ../../assets/research/sequence-modeling.png
members:
  - fred-zhangzhi-peng
  - danyal-rehman
  - luka-mucko
  - antonio-franca
  - alexander-tong
publications:
  - peng2026couplingmodelsonestep
  - peng2026dontretrainalign
  - fredzhangzhipeng2025plannerawarepath
  - fredzhangzhipeng2025pathplanningfor
  - jarridrectorbrooks2025steeringmaskeddiscrete
  - franca2026hackinggenerativeperplexity
---

We develop generative models for discrete sequences, with applications spanning language modeling and biological sequence design. Traditional autoregressive models generate tokens sequentially, but diffusion and flow-based approaches offer the promise of parallel, non-sequential generation and bidirectional editing.

Our work introduces coupling models for one-step discrete generation, learning direct couplings between discrete sequences and Gaussian latents to generate samples in a single step. We also investigate how to adapt pretrained autoregressive language models to diffusion language models via representation alignment, preserving the semantic structure learned during pretraining while enabling non-sequential generation.

## Key Directions

- **One-Step Discrete Generation**: Coupling models that learn direct couplings between discrete sequences and Gaussian latents
- **Diffusion Language Models**: Adapting pretrained AR models to diffusion LMs via representation alignment, and planner-aware path learning for training
- **Masked Diffusion**: Path planning and steering for masked discrete diffusion models via denoising posterior prediction
- **Evaluation**: Understanding the limitations of generative perplexity and advocating for distributional metrics in text evaluation
