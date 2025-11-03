export default function decorate(block) {
  // Block structure: single column with all content
  // Need to separate button from text content

  // Create content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'text-feature-content';

  // Create text wrapper for eyebrow, heading, and paragraphs
  const textWrapper = document.createElement('div');
  textWrapper.className = 'text-feature-text';

  // Get all direct children
  const children = [...block.children];
  let buttonElement = null;

  // Process each child row
  children.forEach((row) => {
    // Get all cells in this row
    const cells = [...row.children];

    cells.forEach((cell) => {
      // Get all elements in this cell
      const elements = [...cell.children];

      elements.forEach((element) => {
        // Check if this element contains a button
        const link = element.querySelector('strong > a');

        if (link && element.tagName === 'P' && element.querySelector('strong > a') && element.children.length === 1) {
          // This is a button paragraph
          buttonElement = link;
        } else {
          // This is text content - add to text wrapper
          textWrapper.append(element);
        }
      });
    });
  });

  // Add text wrapper to content wrapper
  contentWrapper.append(textWrapper);

  // Add button if found
  if (buttonElement) {
    contentWrapper.append(buttonElement);
  }

  // Clear block and add content wrapper
  block.textContent = '';
  block.append(contentWrapper);

  // Add eyebrow class to first paragraph (if it's all caps text without links)
  const firstPara = textWrapper.querySelector('p:first-child');
  if (firstPara && firstPara.textContent.trim() === firstPara.textContent.trim().toUpperCase() && !firstPara.querySelector('a')) {
    firstPara.classList.add('text-feature-eyebrow');
  }
}
