'use client';

import { getQueryClient } from '@/app/getQueryClient';
import PageLayout from '@/components/PageLayout';
import { getIntegratorDataOption } from '@/queries/integrators';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import IntegratorHero from "@/app/integrator/[slug]/IntegratorHero";
import Description from "@/app/integrator/[slug]/Description";
import Charts from "@/app/integrator/[slug]/Charts";

export default function Page() {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(getIntegratorDataOption());

    return (
        <PageLayout>
            <IntegratorHero />
            <Description />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Charts />
            </HydrationBoundary>
        </PageLayout>
    );
}
