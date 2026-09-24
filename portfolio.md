---
layout: default
title: Portfolio
permalink: /portfolio/
description: "Original fiber art pieces"
---

<div class="portfolio-page container">

  <div class="portfolio-header">
    <h1>Portfolio</h1>
    <p class="portfolio-intro">Original pieces available for purchase. Reach out at <a href="mailto:info@rhisfiberart.com">info@rhisfiberart.com</a>.</p>
  </div>

  <div class="portfolio-grid">

    <!-- ============================================================
         HOW TO ADD A PIECE
         Copy one <article> block below and fill in your own details.
         Save the photo to assets/images/ and update the src path.

         HOW TO ADD MORE PHOTOS TO A PIECE
         Add another <img> line inside that piece's
         <div class="portfolio-img-wrap">. The first photo is the cover
         shown on the page; click it to open full screen, then use the
         arrow buttons, arrow keys, or swipe to move between photos.
         Give each photo its own alt text describing it.
         ============================================================ -->
    <article class="portfolio-item">
      <div class="portfolio-img-wrap">
        <img src="{{ '/assets/images/IMG_3250.jpeg' | relative_url }}" alt="Tapestry">
      </div>
      <div class="portfolio-info">
        <h2 class="portfolio-title">Connecting Thread</h2>
        <p class="portfolio-desc">A handwoven cotton tapestry, eco printed with pecan leaves, all connected with handspun silk stitching dyed with locally grown madder root. The red thread of life wraps and connects the prints the way it connects us all.</p>
        <p class="portfolio-price">$200</p>
      </div>
    </article>

    <article class="portfolio-item">
      <div class="portfolio-img-wrap">
        <img src="{{ '/assets/images/IMG_3254.jpeg' | relative_url }}" alt="Scarf">
      </div>
      <div class="portfolio-info">
        <h2 class="portfolio-title">New Ecosystems</h2>
        <p class="portfolio-desc">This scarf represents the tension between native and invasive species in urban ecosystems. The warp was dyed with native Texas species: pecan husks, oak galls, and Turk's cap leaves. The weft was dyed with invasive species: nandina, tree of heaven, and privet. In places the invasive species have begun encroaching on the warp as well. All dye plants were responsibly gathered from public spaces like parks and parking lots.</p>
        <p class="portfolio-price">$175</p>
      </div>
    </article>

    <article class="portfolio-item">
      <div class="portfolio-img-wrap">
        <img src="{{ '/assets/images/IMG_3270.jpeg' | relative_url }}" alt="Cloth Basket">
      </div>
      <div class="portfolio-info">
        <h2 class="portfolio-title">Winter Woods</h2>
        <p class="portfolio-desc">A basket for projects that are preparing to bloom. The interior is felted Gotland wool, the exterior is eco printed cotton, and the stitching is handspun silk thread.</p>
        <p class="portfolio-price">$185</p>
      </div>
    </article>

    <article class="portfolio-item">
      <div class="portfolio-img-wrap">
        <img src="{{ '/assets/images/IMG_3188.jpeg' | relative_url }}" alt="Handwoven shirt">
      </div>
      <div class="portfolio-info">
        <h2 class="portfolio-title">Handmade 1</h2>
        <p class="portfolio-desc">This shirt was handspun from bourette silk, woven on a rigid heddle loom, and dyed using locally grown madder root. It will be on display at the Wild Wild Weft art show at The Lewisville Grand Gallery in Lewisville, TX, from Oct 3rd to Nov 7th, 2026.</p>
        <p class="portfolio-price">Not For Sale</p>
      </div>
    </article>

    <!-- Add more <article class="portfolio-item"> blocks here -->

  </div>

</div>

<script src="{{ '/assets/js/portfolio-lightbox.js' | relative_url }}"></script>
