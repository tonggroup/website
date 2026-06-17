---
title: "Coupling Models for One-Step Discrete Generation"
authors:
  - Fred Zhangzhi Peng
  - Avishek Joey Bose
  - Anru R. Zhang
  - Alexander Tong
date: 2026-05-12
publication: "Preprint"
abstract: >
  Generative modeling over discrete structures underpins applications across deep learning, from biological sequence design and code generation to large language models, yet generation often remains sequential, relying on autoregressive decoding or iterative refinement. In this work, we introduce Coupling Models, a one-step discrete generative model that learns a direct coupling between discrete sequences and Gaussian latents. Unlike recent distillation methods that compress a pretrained multi-step sampler into a few steps, Coupling Model trains a purpose-built decoder to invert this coupling and generate samples in a single step. The model also avoids complex continuous flows over the simplex and hand-specified data-to-noise couplings. Empirically, Coupling Model improves the strongest one-step baselines in each domain: it reduces LM1B text-generation perplexity by 33% at its lowest-perplexity operating point, Fly Brain enhancer-design FBD by 18%, and MNIST-Binary FID by 46%. These results suggest that effective one-step discrete generation depends strongly on how data and noise are coupled before decoding.
urlPdf: https://arxiv.org/abs/2605.07193
links:
  - name: Paper
    url: https://arxiv.org/abs/2605.07193
  - name: Code
    url: https://github.com/pengzhangzhi/Coupling-Models
---

Generative modeling over discrete structures underpins applications across deep learning, from biological sequence design and code generation to large language models, yet generation often remains sequential, relying on autoregressive decoding or iterative refinement. In this work, we introduce Coupling Models, a one-step discrete generative model that learns a direct coupling between discrete sequences and Gaussian latents. Unlike recent distillation methods that compress a pretrained multi-step sampler into a few steps, Coupling Model trains a purpose-built decoder to invert this coupling and generate samples in a single step. The model also avoids complex continuous flows over the simplex and hand-specified data-to-noise couplings. Empirically, Coupling Model improves the strongest one-step baselines in each domain: it reduces LM1B text-generation perplexity by 33% at its lowest-perplexity operating point, Fly Brain enhancer-design FBD by 18%, and MNIST-Binary FID by 46%. These results suggest that effective one-step discrete generation depends strongly on how data and noise are coupled before decoding.
