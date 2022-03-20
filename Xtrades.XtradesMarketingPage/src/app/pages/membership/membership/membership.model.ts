export class MembershipCardPriceTag {
  constructor(
    public period: string,
    public price?: number,
    public userCost?: number
  ) {}
}

export type MembershipCard = {
  selected: boolean;
  title: string;
  priceTag: MembershipCardPriceTag;
  description: string;
  featuresList: string[];
  featuresPrefix?: string;
  possibleAction: MembershipPossibleActions | null;
  planId: string;
  color: string;
  willBeCancelledAt?: string;
  payPalPlanId?: string;
  stripePlanId?: string;
  paymentDescription: string;
  oneTimePayment?: boolean;
  lostFeatures: { name: string; description: string }[];
};

export enum MembershipPossibleActions {
  cancelPlan = 'Cancel Plan',
  upgrade = 'Upgrade',
}
