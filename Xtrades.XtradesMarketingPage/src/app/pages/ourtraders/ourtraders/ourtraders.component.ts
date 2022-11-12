import { DOCUMENT, Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { LoadingService } from '@core/loading.service';
import { Title_Description } from '@shared/components/blog-post/seo-config/seo.constants';
import { SeoService } from '@shared/service/seo.service';

interface Trader {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-ourtraders',
  templateUrl: './ourtraders.component.html',
  styleUrls: ['./ourtraders.component.scss'],
})
export class OurTradersComponent implements OnInit, AfterViewInit {
  traders: Trader[] = [];
  allRoles: Trader[][] = [
    [
      {
        name: 'Alexander_96',
        icon: 'https://cdn.discordapp.com/avatars/580893757033938946/0bebef11b220963bf1c1698f4aeeb844.webp?size=100',
        url: 'https://app.xtrades.net/profile/Alexander',
      },
      {
        name: 'JTW - NTS x SPY',
        icon: 'https://cdn.discordapp.com/avatars/608727754627874871/7f2017371471d930350c5aefa32b3aed.webp?size=100',
        url: 'https://app.xtrades.net/profile/jtwspyplan',
      },
      {
        name: 'Taylor',
        icon: 'https://cdn.discordapp.com/avatars/221277723316715521/608f699496e4c587ba5cee9d34cda5c1.webp?size=100',
        url: 'https://app.xtrades.net/profile/taylor',
      },
      {
        name: 'Wags',
        icon: 'https://cdn.discordapp.com/avatars/398880706375319562/0fc8e5cb587a24efe09031deb9330f97.webp?size=100',
        url: 'https://app.xtrades.net/profile/wags',
      },
    ],
    [
      {
        name: 'Bahamut',
        icon: 'https://cdn.discordapp.com/avatars/600304699542863884/4111b1ec2d7ef2d9f450ca98a9b20b03.webp?size=100',
        url: 'https://app.xtrades.net/profile/bahamut',
      },
      {
        name: 'Kevin',
        icon: 'https://cdn.discordapp.com/guilds/542224582317441034/users/542100078123548684/avatars/d2a888f6554306ad7136d6620d8e8947.webp?size=100',
        url: 'https://app.xtrades.net/profile/kevin',
      },
      {
        name: 'Remy',
        icon: 'https://cdn.discordapp.com/guilds/542224582317441034/users/501245460439105548/avatars/7cc2cb7547bc6158ed70de894ac0e72c.webp?size=160',
        url: 'https://app.xtrades.net/profile/remy',
      },
      {
        name: 'TimeHawk',
        icon: 'https://cdn.discordapp.com/avatars/201836635376058368/a24fc46ad9d6674fe2b786a4d608df66.webp?size=40',
        url: 'https://app.xtrades.net/profile/timehawk',
      },
    ],
    [
      {
        name: 'Dan',
        icon: 'https://cdn.discordapp.com/avatars/201836635376058368/a24fc46ad9d6674fe2b786a4d608df66.webp?size=40',
        url: 'https://app.xtrades.net/profile/dan',
      },
      {
        name: 'Dangler272',
        icon: 'https://cdn.discordapp.com/avatars/289974795595153410/e6823e014178da69435305fcad1f5322.webp?size=40',
        url: 'https://app.xtrades.net/profile/dangler2727',
      },
      {
        name: 'Preston',
        icon: 'https://cdn.discordapp.com/avatars/636986992097361932/0315d3ef3962356c216e30a2d3107928.webp?size=100',
        url: 'https://app.xtrades.net/profile/preston',
      },
      {
        name: 'Shinmoon',
        icon: 'https://cdn.discordapp.com/avatars/270907524847370240/b78b2b5bd06eb8927dd04d8894085712.webp?size=100',
        url: 'https://app.xtrades.net/profile/shinmoon',
      },
      {
        name: 'Squeeze',
        icon: 'https://cdn.discordapp.com/avatars/568561012731543555/eeb3c900923ba1638e990bc2a501ef38.webp?size=100',
        url: 'https://app.xtrades.net/profile/squeeze'
      },
    ],
    [
      {
        name: 'Angelic',
        icon: 'https://cdn.discordapp.com/avatars/214215196342878208/5aa0a4f26865509b05e038611d36eb6b.webp?size=100',
        url: 'https://app.xtrades.net/profile/angelic?tab=profile',
      },
      {
        name: 'BigT4X',
        icon: 'https://cdn.discordapp.com/avatars/798228789154676809/3c0b2a68ed7e2f011eb1cb4124b37669.webp?size=100',
        url: 'https://app.xtrades.net/profile/bigt4x',
      },
      {
        name: 'Byron',
        icon: 'https://cdn.discordapp.com/avatars/443933735445069825/4789f48f40ccc9588a9042f045d10e1d.webp?size=100',
        url: 'https://app.xtrades.net/profile/byron',
      },
      {
        name: 'Free Runner',
        icon: 'https://cdn.discordapp.com/avatars/529439744036438028/6992b74f8476c525927dbef0483c7287.webp?size=100',
        url: 'https://app.xtrades.net/profile/carlhalden?tab=profile',
      },
      {
        name: 'Hydra',
        icon: 'https://cdn.discordapp.com/avatars/280067149412958209/0a51befab63415d3fae17543b2279130.webp?size=100',
        url: 'https://app.xtrades.net/profile/63a8eb4c-36f3-4243-a696-9137eb5ff6f2?tab=profile',
      },
      {
        name: 'Iggy',
        icon: 'https://cdn.discordapp.com/avatars/806798149048860673/beed6a4b47abd3b16eebb151a62b844c.webp?size=100',
        url: 'https://app.xtrades.net/profile/Iggy',
      },
      {
        name: 'm o o n s h o o t',
        icon: 'https://cdn.discordapp.com/avatars/283704832781451266/39177ac5e0a46c4f47194d77957185bc.webp?size=100',
        url: 'https://app.xtrades.net/profile/moonshot',
      },
      {
        name: 'sprout',
        icon: 'https://cdn.discordapp.com/avatars/551790566007111680/d89cf20f15e38397f0d917a616146b96.webp?size=100',
        url: 'https://app.xtrades.net/profile/sprout',
      },
      {
        name: 'Stefan C',
        icon: 'https://cdn.discordapp.com/avatars/152610857073901568/72a05b7b36d3ff38d0f586cae8e40397.webp?size=100',
        url: 'https://app.xtrades.net/profile/5bd273a7-e5fd-4f0a-93e8-c406c3c60b52',
      },
      {
        name: 'SwingJam',
        icon: 'https://cdn.discordapp.com/avatars/305757695904841738/e77da6c29ada7007a3697c39e1cf3416.webp?size=100',
        url: 'https://app.xtrades.net/profile/11a33b54-a6f4-445a-8d12-ecd5eaf4bf8c',
      },
      {
        name: 'Yung Buck',
        icon: 'https://cdn.discordapp.com/avatars/212782836082671627/d1ec38f61bf02704e7972be98315371f.webp?size=100',
        url: 'https://app.xtrades.net/profile/yung_buck',
      },
    ],
    [
      {
        name: '007 B.Axelrod',
        icon: 'https://cdn.discordapp.com/avatars/636451998056579072/045335a136f1bc122edf100317d9c0ac.webp?size=100',
        url: 'https://app.xtrades.net/profile/da767d71-ecc5-4ce0-b3dc-2c2f8de452a8',
      },
      {
        name: 'BELLE DELPHINE ツ (CPG)',
        icon: 'https://cdn.discordapp.com/avatars/311003050166714379/d1451dd0194d10dfe8979e6d3d6c3ee0.webp?size=100',
        url: 'https://app.xtrades.net/profile/ee5c8f32-ab8f-49bb-959a-f42ce602425',
      },
      {
        name: 'BigT4X',
        icon: 'https://cdn.discordapp.com/avatars/798228789154676809/3c0b2a68ed7e2f011eb1cb4124b37669.webp?size=100',
        url: 'https://app.xtrades.net/profile/bigt4x',
      },
      {
        name: 'Brycat23',
        icon: 'https://cdn.discordapp.com/avatars/623984968921776150/18596727ef59c1fa9a6145f1196f3df5.webp?size=100',
        url: 'https://app.xtrades.net/profile/95059ce6-5870-41f0-91ed-96802eb454f7',
      },
      {
        name: 'Byron',
        icon: 'https://cdn.discordapp.com/avatars/443933735445069825/4789f48f40ccc9588a9042f045d10e1d.webp?size=100',
        url: 'https://app.xtrades.net/profile/byron',
      },
      {
        name: 'DanielS (Theta Gang)',
        icon: 'https://cdn.discordapp.com/avatars/266749229584613386/a_6a1890ed7d6aa3dafc1503058abd1c8b.webp?size=100',
        url: 'https://app.xtrades.net/profile/daniels_xt?tab=profile',
      },
      {
        name: 'ebot_test3',
        icon: 'https://discord.com/assets/c09a43a372ba81e3018c3151d4ed4773.png',
        url: 'https://app.xtrades.net/profile/5c46fb45-addc-4732-a844-efbba7c1848a',
      },
      {
        name: 'Carl Halden, Online',
        icon: 'https://cdn.discordapp.com/avatars/529439744036438028/6992b74f8476c525927dbef0483c7287.webp?size=40',
        url: 'https://app.xtrades.net/profile/carlhalden?tab=profile',
      },
      {
        name: 'Hydra',
        icon: 'https://cdn.discordapp.com/avatars/280067149412958209/0a51befab63415d3fae17543b2279130.webp?size=100',
        url: 'https://app.xtrades.net/profile/63a8eb4c-36f3-4243-a696-9137eb5ff6f2?tab=profile',
      },
      {
        name: 'MD.Trading',
        icon: 'https://cdn.discordapp.com/avatars/1020173429460189326/7da883a74a0407b0498a2d152c92a762.webp?size=40',
        url: 'https://app.xtrades.net/profile/mdtrading?tab=profile',
      },
      {
        name: 'Pyro',
        icon: 'https://cdn.discordapp.com/avatars/480122361862160384/799f5d5717dbadf790f55d8c06e29552.webp?size=40',
        url: 'https://app.xtrades.net/profile/pyro?tab=profile',
      },
      {
        name: 'scepticule',
        icon: 'https://cdn.discordapp.com/avatars/398244725783658516/fd19e483f5618c8be793393f90feed58.webp?size=100',
        url: 'https://app.xtrades.net/profile/skepticule',
      },
    ],
    [
      {
        name: 'Birkenstock',
        icon: 'https://cdn.discordapp.com/avatars/355499263502843904/4797bd08e7b5f005f2cda4b9eb5433ee.webp?size=100',
        url: 'https://app.xtrades.net/profile/birkenstock',
      },
      {
        name: 'darkestly',
        icon: 'https://cdn.discordapp.com/avatars/720160725741469758/de39f57c05d92030664a4e0a9a4784ed.webp?size=100',
        url: 'https://app.xtrades.net/profile/7f2181a3-c0f0-4084-a35e-ac5db9a54fd2',
      },
      {
        name: 'DoughBoi🍩',
        icon: 'https://cdn.discordapp.com/guilds/542224582317441034/users/398128926913986560/avatars/c24ea55ffe1919265af201d810be4838.webp?size=160',
        url: 'https://app.xtrades.net/profile/doughboi',
      },
      {
        name: 'GradyV',
        icon: 'https://cdn.discordapp.com/avatars/315552820680065025/884896ac6bc16fe8fe2398376d6149e9.webp?size=100',
        url: 'https://app.xtrades.net/profile/gradyv?tab=profile',
      },
      {
        name: 'Hawaiianbeef',
        icon: 'https://cdn.discordapp.com/avatars/229348048042459137/338e003599f0ab91b42aefcae3cb11c1.webp?size=40',
        url: 'https://app.xtrades.net/profile/hawaiianbeef',
      },
      {
        name: 'Hellboii',
        icon: 'https://cdn.discordapp.com/avatars/703505706497605663/b3b4447254f8c44f40fd16ed1e98cd7d.webp?size=100',
        url: 'https://app.xtrades.net/profile/hellboii?tab=profile',
      },
      {
        name: 'JTrader',
        icon: 'https://cdn.discordapp.com/avatars/220921823288754176/58f2c9dd7af951a398cd374068fc6b29.webp?size=100',
        url: 'https://app.xtrades.net/profile/c5fba689-3285-495c-8575-6eca52a9f17f?tab=profile'
      },
      {
        name: 'Mr M',
        icon: 'https://cdn.discordapp.com/guilds/542224582317441034/users/801056759422386176/avatars/9a9cd49d1c7a12eb342063bbd879b753.webp?size=160',
        url: 'https://app.xtrades.net/profile/6b6c7f45-ac50-4849-bfa0-8edfc7a3faef?tab=profile',
      },
      {
        name: 'Omar G',
        icon: 'https://cdn.discordapp.com/avatars/343257254428147713/4fb31841a85ebc2317efc917b1e44773.webp?size=100',
        url: 'https://app.xtrades.net/profile/omarg?tab=profile',
      },
      {
        name: 'Tatoepaladin',
        icon: 'https://cdn.discordapp.com/avatars/92534638425161728/ddc7de3b651fbec11a31f80c17268c9c.webp?size=1000',
        url: 'https://app.xtrades.net/profile/tatoepaladin?tab=profile',
      },
      {
        name: 'TerraIncognita',
        icon: 'https://cdn.discordapp.com/avatars/723276661574860831/d80e985692c55239ec3e1d39b8ddc7d6.webp?size=1000',
        url: 'https://app.xtrades.net/profile/terraincognita?tab=profile',
      },
      {
        name: 'Turtlemankam',
        icon: 'https://cdn.discordapp.com/avatars/496470892403228672/bf9cb95c92628aa1f4e299046a7dc819.webp?size=100',
        url: 'https://app.xtrades.net/profile/turtlemankam?tab=profile',
      },
      {
        name: 'VIXtrader',
        icon: 'https://cdn.discordapp.com/avatars/584076066474295309/c4d22c2d237dc8c3967ac0abb2211a9d.webp?size=100',
        url: 'https://app.xtrades.net/profile/5a807154-43bd-48b6-813a-b5df27511875?tab=profile',
      },
    ],
    [
      {
        name: '3echo9',
        icon: 'https://cdn.discordapp.com/avatars/593093905273192455/6b801bab57db2b58c4666e3c58482346.webp?size=100',
        url: 'https://app.xtrades.net/profile/3echo9?tab=profile',
      },
      {
        name: 'Brad (CPG)',
        icon: 'https://cdn.discordapp.com/avatars/715075810389655622/6b504c3702ae85bdd0d82c8925d160d6.webp?size=100',
        url: 'https://app.xtrades.net/profile/brad?tab=profile',
      },
      {
        name: 'BUZA🤑',
        icon: 'https://cdn.discordapp.com/avatars/826437437021880320/b6180568e537f939cd3926f9390f2b8f.webp?size=100',
        url: 'https://app.xtrades.net/profile/buza?tab=profile',
      },
      {
        name: 'chiggz',
        icon: 'https://cdn.discordapp.com/avatars/299320033547517962/6d96e9e67d47e50185273f96d39c3ec8.webp?size=100',
        url: 'https://app.xtrades.net/profile/chiggz?tab=profile',
      },
      {
        name: 'combs',
        icon: 'https://cdn.discordapp.com/avatars/604861141042200586/9f1fc6dfa2eb727af3fd6dbb9a2b81fa.webp?size=100',
        url: 'https://app.xtrades.net/profile/icomber10?tab=profile',
      },
      {
        name: 'deluxe',
        icon: 'https://cdn.discordapp.com/avatars/150749650612256768/e7b9e5fda6ac49735bc8b12b03350923.webp?size=100',
        url: 'https://app.xtrades.net/profile/deluxe?tab=profile',
      },
      {
        name: 'DrPheelz',
        icon: 'https://cdn.discordapp.com/avatars/388517580077400074/3adbb89c1832da356a23121beb7d652a.webp?size=100',
        url: 'https://app.xtrades.net/profile/drpheelz?tab=profile',
      },
      {
        name: 'GeminiTrades',
        icon: 'https://cdn.discordapp.com/avatars/205900656232497153/83ee717b6f2e4f782206ea63de61a057.webp?size=40',
        url: 'https://app.xtrades.net/profile/geminitrades?tab=profile',
      },
      {
        name: 'HighFlyingBull🐃💸',
        icon: 'https://cdn.discordapp.com/avatars/823971605209284676/bacf63cf6ddde576f6d628a0fe5f0caf.webp?size=100',
        url: 'https://app.xtrades.net/profile/highflyingbull?tab=profile',
      },
      {
        name: 'Juice',
        icon: 'https://cdn.discordapp.com/avatars/392476656318545921/76b43ce41afaf7cfbc58cf7d838f8f32.webp?size=40',
        url: 'https://app.xtrades.net/profile/juice?tab=profile',
      },
      {
        name: 'manbacker45',
        icon: 'https://cdn.discordapp.com/avatars/555855079048085526/bfe60d44d0fbd77c441c16b2262c54dd.webp?size=100',
        url: 'https://app.xtrades.net/profile/manbacker45?tab=profile',
      },
      {
        name: 'marciokoko',
        icon: 'https://cdn.discordapp.com/avatars/456501146987659274/56ca76a118764bacb7aa36c7968e0d9b.webp?size=100',
        url: 'https://app.xtrades.net/profile/manbacker45?tab=profile',
      },
      {
        name: 'Mr Options',
        icon: 'https://cdn.discordapp.com/avatars/241173947356282881/6f328c14724d280e2732231f1eb5c738.webp?size=100',
        url: 'https://app.xtrades.net/profile/mr_options?tab=profile',
      },
    ],
  ];

  constructor(
    private loadingService: LoadingService,
    private location: Location,
    private SEOService: SeoService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    // the script info -----
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = Title_Description.blogPageScript || ``;
    this._renderer2.appendChild(this._document.body, script);

    // add cannonical link in page ---
    this.SEOService.createCanonicalLink(this.location.path());

    this.traders = this.allRoles[0];
  }

  ngAfterViewInit(): void {
    this.loadingService.removeLoader();
  }

  chooseRole(index: number) {
    this.traders = this.allRoles[index];
    console.log(this.traders);
    if (!this.traders) {
      this.traders = [];
    }
  }

  handleGoToDestination(link: string) {
    window.open(link, '_blank');
  }

  goToTraderProfile(url: string) {
    window.open(url);
  }
}
