import { Component } from '@angular/core';
import { MembershipCard } from './membership.model';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent {
  expanded = true;

  options: MembershipCard[] = [
    {
      selected: false,
      title: 'Elite',
      priceTag: { userCost: 48, period: 'month' },
      description: 'Our monthly plan',
      planId: 'elite',
      featuresList: [
        'Analyst & top trader signals',
        'Access to thousands of real traders',
        'Mobile and web app access',
        'Daily videos, posts or webinars',
      ],
      lostFeatures: [
        {
          name: 'Grandfathered Rate Loss',
          // eslint-disable-next-line max-len
          description:
            'You will lose your discounted grandfathered rate of $50/month.  You will have to sign up at the new rate of $48/month when you decide to return.',
        },
        {
          name: 'Alerts and Channel Access',
          // eslint-disable-next-line max-len
          description:
            // eslint-disable-next-line max-len
            'You will lose access to Alerts and private channels inside of our discord including #options-elite, #stock-elite, #options-alerts, #stock-alerts, watchlist channels, and more.',
        },
        {
          name: 'Webinars',
          description:
            'Various topics from different instructors each week.  You will no longer be able to attend these educational gatherings.',
        },
        {
          name: 'Stored Content',
          description:
            'Our free and evergrowing database of content in the Xhub will now be unavailable to you as a non-member.',
        },
      ],
      possibleAction: null,
      color: 'green',
      paymentDescription: `You will automatically be charged $48 each month unless cancelled.
        Cancellations must be made or requested before the renewal date and time.
        Renewal payments occur on the same date of the month and time of the day as your initial sign-up date and time.`,
    },
    {
      selected: false,
      title: 'Elite +',
      priceTag: { userCost: 388, period: 'year' },
      planId: 'plus',
      description:
        'Our annual plan. All the perks of Elite access and a couple extras.',
      featuresList: [
        'Algo access',
        'Xtrades proprietary indicators, scanners, ans scripts library',
        '2 free months of subscription',
        'Platinum trading courses',
      ],
      lostFeatures: [
        {
          name: 'Grandfathered Rate Loss',
          // eslint-disable-next-line max-len
          description:
            // eslint-disable-next-line max-len
            'You will lose your discounted grandfathered rate of $389/year. (increasing to $499 a year soon) You will have to sign up at the higher market rate.',
        },
        {
          name: 'Access Loss',
          // eslint-disable-next-line max-len
          description:
            // eslint-disable-next-line max-len
            'You will lose access to Alerts and private channels inside of our discord including #options-elite, #stock-elite, #options-alerts, #stock-alerts, watchlist channels, and more.  We host various topics from different instructors each week,  you will no longer be able to attend these educational gatherings.',
        },
        {
          name: 'Stored Content',
          // eslint-disable-next-line max-len
          description:
            'Our free and evergrowing database of Indicator, Script, and Video Course content in the Xhub will now be unavailable to you as a non-member.',
        },
        {
          name: 'Earners Feature',
          // eslint-disable-next-line max-len
          description:
            // eslint-disable-next-line max-len
            'As a contributing member of the community, you can actually earn live payments via contributing to the Xtrades platform.  Most of our earners have made back their membership fee in multiples.  Learn more <a target="_blank"href="http://xtrades.net/earn">here</a>.',
        },
      ],
      possibleAction: null,
      color: 'yellow',
      featuresPrefix: 'All <strong>Elite</strong> Features And:',
      paymentDescription: `You will automatically be charged $388 each year unless cancelled.
        Cancellations must be made or requested before the renewal date and time.
        Renewal payments occur on the same date of the year and time of the day as your initial sign-up date and time.`,
    },
    {
      selected: false,
      title: 'Lifetime',
      priceTag: { userCost: 999, period: 'Single Payment' },
      oneTimePayment: true,
      planId: 'lifetime',
      description:
        'Our lifetime plan. All the perks of Elite + access and a couple extras.',
      featuresList: [
        'Lifetime webinar pass',
        'Lifetime full chat access',
        '2 hours of live coaching with dedicated analysts',
      ],
      lostFeatures: [],
      possibleAction: null,
      color: 'blue',
      featuresPrefix: 'All <strong>Elite +<strong> Features And:',
      paymentDescription: '',
    },
  ];
}
