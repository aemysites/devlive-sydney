import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');

    // Check if there's a link in the content
    const link = row.querySelector('a');
    let cardWrapper;

    if (link && link.textContent.trim()) {
      // Create a link wrapper for the entire card
      cardWrapper = document.createElement('a');
      cardWrapper.href = link.href;
      cardWrapper.title = link.textContent.trim();
    } else {
      // Create a div wrapper if no link
      cardWrapper = document.createElement('div');
    }

    // Get the image (first cell)
    const imageCell = row.children[0];
    const picture = imageCell?.querySelector('picture');

    // Get the content (second cell)
    const contentCell = row.children[1];

    if (picture) {
      // Create image wrapper
      const imageDiv = document.createElement('div');
      imageDiv.className = 'cards-card-image';
      imageDiv.append(picture);
      cardWrapper.append(imageDiv);
    }

    if (contentCell) {
      // Extract tag, date, and heading
      const paragraphs = contentCell.querySelectorAll('p');
      const heading = contentCell.querySelector('h3');

      // Create meta container for tag and date
      const metaDiv = document.createElement('div');
      metaDiv.className = 'cards-card-meta';

      // First paragraph should have the tag (strong element)
      if (paragraphs[0]) {
        const strong = paragraphs[0].querySelector('strong');
        if (strong) {
          const tagSpan = document.createElement('span');
          tagSpan.className = 'cards-card-tag';
          tagSpan.textContent = strong.textContent;
          metaDiv.append(tagSpan);
        }
      }

      // Second paragraph should have the date
      if (paragraphs[1]) {
        const dateP = document.createElement('p');
        dateP.className = 'cards-card-date';
        dateP.textContent = paragraphs[1].textContent;
        metaDiv.append(dateP);
      }

      cardWrapper.append(metaDiv);

      // Add heading
      if (heading) {
        cardWrapper.append(heading);
      }
    }

    // Remove the link from card body if it was moved to wrapper
    if (link && cardWrapper.tagName === 'A') {
      const linkInCard = cardWrapper.querySelector('a');
      if (linkInCard && linkInCard.href === cardWrapper.href) {
        linkInCard.remove();
      }
    }

    li.append(cardWrapper);
    ul.append(li);
  });

  // Optimize images
  ul.querySelectorAll('picture > img').forEach((img) =>
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])
    )
  );

  block.textContent = '';
  block.append(ul);
}
