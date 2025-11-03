import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // The block has two cells:
  // 1. Image cell (first child)
  // 2. Content cell (second child) - contains heading, paragraph, and link

  const cells = [...block.children[0].children];
  
  if (cells.length < 2) return;

  const imageCell = cells[0];
  const contentCell = cells[1];

  // Create image container
  const imageContainer = document.createElement('div');
  const picture = imageCell.querySelector('picture');
  
  if (picture) {
    imageContainer.append(picture);
  }

  // Create content container
  const contentContainer = document.createElement('div');
  const contentInner = document.createElement('div');
  
  // Move all content (heading, paragraph, link) to inner wrapper
  while (contentCell.firstChild) {
    contentInner.append(contentCell.firstChild);
  }
  
  contentContainer.append(contentInner);

  // Clear block and add new structure
  block.textContent = '';
  block.append(imageContainer);
  block.append(contentContainer);

  // Optimize images
  block.querySelectorAll('picture > img').forEach((img) =>
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '1200' }])
    )
  );
}
