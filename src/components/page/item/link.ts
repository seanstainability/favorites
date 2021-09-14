import { BaseComponent } from "../../component.js";

export class LinkComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="link">
                        <h2 class="link__title"></h2>
                        <a class="link__body"></a>
                     </section>`);
    const titleElement = this.element.querySelector(
      ".link__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
    const linkElement = this.element.querySelector(
      ".link__body"
    )! as HTMLLinkElement;
    linkElement.href = url;
    linkElement.textContent = url;
    linkElement.target = "_blank";
    linkElement.rel = "noreferrer noopener";
  }
}
