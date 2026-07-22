---
title: "Planner Aware Path Learning in Diffusion Language Models Training"
authors:
  - Fred Zhangzhi Peng
  - Zachary Bezemek
  - Jarrid Rector-Brooks
  - Shuibai Zhang
  - Anru R. Zhang
  - Michael Bronstein
  - Avishek Joey Bose
  - Alexander Tong
date: 2026-05-07
publication: "In *ICLR 2026* (Oral)"
abstract: >
  Diffusion language models have emerged as a powerful alternative to autoregressive models, enabling fast inference through flexible and parallel generation paths. This flexibility is enabled by new sampling strategies, or planners, that iteratively choose where to denoise along the sequence rather than sampling uniformly at random. However, by modifying reverse paths, planners introduce a mismatch between the uniformly random denoising paths used during training and the planning-based paths used at inference. In this work, we systematically investigate this mismatch and theoretically show that the standard discrete diffusion training evidence lower bound (ELBO) does not accurately describe a denoiser under non-uniform planning. To bridge this gap, we derive a new Planned Evidence Lower Bound (P-ELBO) that directly incorporates planner-based reverse dynamics into the training objective. Building on this, we propose Planner Aware Path Learning (PAPL), a simple and effective modification of the standard masked discrete diffusion loss that aligns training and inference under planned denoisers. Empirically, PAPL delivers consistent improvements across domains, including a 40% relative gain in protein sequence modeling, up to a 4x improvement in MAUVE for text generation, and a 23% relative gain in HumanEval pass@10 for code generation.
urlPdf: https://arxiv.org/abs/2509.23405
links:
  - name: Paper
    url: https://arxiv.org/abs/2509.23405
  - name: Code
    url: http://github.com/pengzhangzhi/PAPL
authorNotes:
  Fred Zhangzhi Peng: Equal Contribution
  Zachary Bezemek: Equal Contribution
  Avishek Joey Bose: Equal Contribution
  admin: Equal Contribution
---

Diffusion language models have emerged as a powerful alternative to autoregressive models, enabling fast inference through flexible and parallel generation paths. This flexibility is enabled by new sampling strategies, or planners, that iteratively choose where to denoise along the sequence rather than sampling uniformly at random. However, by modifying reverse paths, planners introduce a mismatch between the uniformly random denoising paths used during training and the planning-based paths used at inference. In this work, we systematically investigate this mismatch and theoretically show that the standard discrete diffusion training evidence lower bound (ELBO) does not accurately describe a denoiser under non-uniform planning. To bridge this gap, we derive a new Planned Evidence Lower Bound (P-ELBO) that directly incorporates planner-based reverse dynamics into the training objective. Building on this, we propose Planner Aware Path Learning (PAPL), a simple and effective modification of the standard masked discrete diffusion loss that aligns training and inference under planned denoisers. Empirically, PAPL delivers consistent improvements across domains, including a 40% relative gain in protein sequence modeling, up to a 4x improvement in MAUVE for text generation, and a 23% relative gain in HumanEval pass@10 for code generation.