import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { LinkComponent } from "./components/page/item/link.js";
import { VideoComponent } from "./components/page/item/video.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "random-image",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");

    const note = new NoteComponent("note-title", "note-body");
    note.attachTo(appRoot, "beforeend");

    const link = new LinkComponent(
      "link-title",
      "https://github.com/seanstainability"
    );
    link.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "video-title",
      "https://www.youtube.com/embed/4y_L6Emtsxw"
    );
    video.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
