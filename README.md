[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/z7rwastaken/ad-scaffold">
    <img src="https://cdn.discordapp.com/attachments/823173525866020875/884184539029708840/logo.png" alt="Andreww!" width="256" height="256">
  </a>

  <h3 align="center">ad-scaffold</h3>

  <p align="center">
    A scaffold for your TypeScript FiveM resource!
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

### Built With
* [TypeScript](https://www.typescriptlang.org/)
* [Webpack](https://webpack.js.org/)
* [Yarn](https://yarnpkg.com/)

## Getting Started

To get the scaffold up & running in your server complete the following steps!

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/z7rwastaken/ad-scaffold.git 
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Go ahead and edit the source to your likeliness!
    ```ts
    const changes = (none): null => {
        return none;
    }
4. Make usage of the yarn scripts (see `package.json`)
    ```sh
    yarn run build:dev
    ```

## Usage
Rename the resource in `fxmanifest.lua` and its folder, add `ensure <resourceName>` in your server.cfg and you're ready!

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Andreww z7rwastaken - @andreww#1246 at [Discord](https://discord.gg//) - andreww@shadowct.eu

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/z7rwastaken/ad-scaffold.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/z7rwastaken/ad-scaffold
[license-shield]: https://img.shields.io/github/license/z7rwastaken/ad-scaffold.svg?style=for-the-badge
[license-url]: https://github.com/z7rwastaken/ad-scaffold/blob/main/LICENSE
