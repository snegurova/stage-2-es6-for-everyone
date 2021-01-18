import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {

  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });
  // console.log(fighter._id);
  // todo: show fighter info (image, name, health, etc.)
  fighterElement.appendChild(createFighterImage(fighter));
  const info = createElement({
    tagName: 'div',
    className: `fighter-preview___info`,
  });
  info.innerText = `${fighter.name} | attack ${fighter.attack} | health ${fighter.health}`;
  console.log(info);
  fighterElement.appendChild(info);

  return fighterElement;
}

export function createFighterImage(fighter) {
  console.log(fighter);
  const { source, name } = fighter;
  const attributes = {
    src: source,
    title: name,
    alt: name
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
