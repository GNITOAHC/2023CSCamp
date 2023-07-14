---
layout: center
---

# Deploy Our game

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

---

## Build Settings

1. Select `Build Settings...` (from `file`).
2. Select `WebGL` and switch platforms.

<img src="/sources/Deploy/Build_settings.png" style="height:80%;" />

---

> If you can't select `WebGL`, add `WebGL Build Support` module to your Unity editor.

<img src="/sources/Deploy/Add_modules.png" style="height:80%" />

---

3. Click on `Player Settings` at the left bottom of the window and open the project settings panel.
4. Change `Player > Resolution and Presentation > Default Canvas Width/Height` to 960 * 540.
5. Select `Player > Resolution and Presentation > WebGL Template > Minimal`.

<img src="/sources/Deploy/Project_settings.png" style="height:80%" />

---

6. Change `Player > Publishing Settings > Compression Format` to `Disable`.

<img src="/sources/Deploy/Publishing_settings.png" style="height:80%" />

---

7. Check the scene on the upper right corner and click `Build`.

<img src="/sources/Deploy/Build.png" style="height:80%;" />

8. After build succeeds, compress the output folder to a `zip` file.

---

## Itch.io deploy

1. Open [itch.io](https://itch.io) and create a new project.

<img src="/sources/Deploy/Itchio.png" style="height:70%" />

> Rename `Title` and `Classification` yourself and select `HTML` for `Kind of project`

---

2. Upload the `zip` file we just compressed.

<img src="/sources/Deploy/Before_upload.png" style="height:80%" />

---

After upload, stay with the default options.

<img src="/sources/Deploy/After_upload.png" style="height:80%" />

---

3. For embed options, select `Embed in page, Manually set size (960 * 540)`.  
(Select `Automatically start on page load` for Frames option)

4. Complete the settings and click on `Save & view page`.

> `Visibility & access` could be changed to `Public` after the first saved.

<img src="/sources/Deploy/Save_n_view.png" style="height:50%" />

---

## Final Product

<img src="/sources/Deploy/Final.png" style="height:80%" />
