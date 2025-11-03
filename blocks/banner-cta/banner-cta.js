export default function decorate(block) {
  // Extract all paragraphs from the block
  const paragraphs = [...block.querySelectorAll('p')];

  // First paragraph is the heading
  const headingText = paragraphs[0]?.textContent.trim();
  // Second paragraph is the description
  const descText = paragraphs[1]?.textContent.trim();
  // Third paragraph contains the button link
  const buttonLink = paragraphs[2]?.querySelector('a');

  // Clear the block
  block.textContent = '';

  // Create the structure
  const card = document.createElement('div');
  card.className = 'banner-cta-card';

  const grid = document.createElement('div');
  grid.className = 'banner-cta-grid';

  const textContainer = document.createElement('div');
  textContainer.className = 'banner-cta-text';

  // Create heading element
  if (headingText) {
    const heading = document.createElement('div');
    heading.className = 'banner-cta-heading';
    heading.textContent = headingText;
    textContainer.append(heading);
  }

  // Create paragraph element
  if (descText) {
    const para = document.createElement('p');
    para.textContent = descText;
    textContainer.append(para);
  }

  // Add text container to grid
  grid.append(textContainer);

  // Add button to grid
  if (buttonLink) {
    grid.append(buttonLink);
  }

  // Assemble the structure
  card.append(grid);
  block.append(card);
}
