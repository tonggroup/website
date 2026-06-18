---
title: "Why Are DMD Students Lazy? Understanding the Copying Behavior in Few-Step Distillation"
authors:
  - Shucheng Li
  - Iolo Jones
  - Alexander Tong
  - Michael M. Bronstein
date: 2026-06-01
publication: "In *ICML 2026 Workshop on High-dimensional Learning Dynamics*"
abstract: >
  Distribution Matching Distillation (DMD) compresses pretrained diffusion models into efficient few-step generators by aligning their noised distributions across all scales. In principle, such distribution-level supervision remains agnostic to specific noise-data pairings of the teacher; this provides the student the freedom to remap latent noise, a behavior consistently observed in low-dimensional settings. Surprisingly, we find that in high-dimensional settings, distilled students spontaneously reproduce the original noise-data pairings of the teacher, a phenomenon we term copying. We demonstrate that copying is neither a byproduct of adversarial objectives nor a result of teacher memorization. Instead, our evidence suggests that copying is an emergent property arising from the limited geometric freedom of the student model during high-dimensional distillation.
urlPdf: https://arxiv.org/abs/2606.02237
links:
  - name: Paper
    url: https://arxiv.org/abs/2606.02237
authorNotes:
  admin: Equal advising
  Michael M. Bronstein: Equal advising
---

Distribution Matching Distillation (DMD) compresses pretrained diffusion models into efficient few-step generators by aligning their noised distributions across all scales. In principle, such distribution-level supervision remains agnostic to specific noise-data pairings of the teacher; this provides the student the freedom to remap latent noise, a behavior consistently observed in low-dimensional settings. Surprisingly, we find that in high-dimensional settings, distilled students spontaneously reproduce the original noise-data pairings of the teacher, a phenomenon we term copying. We demonstrate that copying is neither a byproduct of adversarial objectives nor a result of teacher memorization. Instead, our evidence suggests that copying is an emergent property arising from the limited geometric freedom of the student model during high-dimensional distillation.
