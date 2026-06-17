---
title: "Hacking Generative Perplexity: Why Unconditional Text Evaluation Needs Distributional Metrics"
authors:
  - Antonio Franca
  - Alexander Tong
date: 2026-06-10
publication: "In *ICML 2026 Workshop on Structured Probabilistic Inference & Generative Modeling (SPIGM)*"
abstract: >
  Diffusion and continuous flow-based language models have emerged as the leading non-autoregressive alternatives to language modeling. Progress in both paradigms is overwhelmingly tracked by generative perplexity (gen-PPL): the per-token negative log-likelihood of samples under a frozen autoregressive (AR) scorer such as gpt2-large, typically paired with an empirical-entropy guardrail to rule out low-entropy collapse. We argue that this metric is unsound. By construction, gen-PPL measures only predictability under the scoring AR, not grammaticality or semantic coherence -- and the set of predictable but still low-quality sequences is combinatorially large. To make this concrete, we construct a suite of zero-parameter, deliberately naive samplers that achieve state-of-the-art gen-PPL on LM1B and OpenWebText at non-degenerate entropy, surpassing recently published diffusion and continuous-flow models while producing text that is incoherent by construction. We recommend evaluation suites that directly quantify the distributional divergence between generated and reference text, and use such a suite to re-benchmark recent non-autoregressive models, recovering a more faithful picture of the current state of the art.
urlPdf: https://arxiv.org/abs/2606.08417
links:
  - name: Paper
    url: https://arxiv.org/abs/2606.08417
---

Diffusion and continuous flow-based language models have emerged as the leading non-autoregressive alternatives to language modeling. Progress in both paradigms is overwhelmingly tracked by generative perplexity (gen-PPL): the per-token negative log-likelihood of samples under a frozen autoregressive (AR) scorer such as gpt2-large, typically paired with an empirical-entropy guardrail to rule out low-entropy collapse. We argue that this metric is unsound. By construction, gen-PPL measures only predictability under the scoring AR, not grammaticality or semantic coherence -- and the set of predictable but still low-quality sequences is combinatorially large. To make this concrete, we construct a suite of zero-parameter, deliberately naive samplers that achieve state-of-the-art gen-PPL on LM1B and OpenWebText at non-degenerate entropy, surpassing recently published diffusion and continuous-flow models while producing text that is incoherent by construction. We recommend evaluation suites that directly quantify the distributional divergence between generated and reference text, and use such a suite to re-benchmark recent non-autoregressive models, recovering a more faithful picture of the current state of the art.
