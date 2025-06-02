import { serve } from "@upstash/workflow/express";
import Subscription from "../models/subscription.model";
import dayjs from "dayjs";

export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status !== active) {
        return;
    }

    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passes for subscription ${subscriptionId}. Stopping workflow.`);
        return;
    }

    
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId).poppulate('user', 'name email');
    })
}