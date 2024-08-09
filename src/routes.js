import { createRouter, createWebHistory } from 'vue-router';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import ('./components/LandingPage/MainLandingPage.vue')
        },
        {
            path: '/fellow',
            name: 'Fellowship',
            component: () => import ('./components/fellowshipPage/MainFellowshipPage.vue')
        },
        {
            path: '/courses',
            name: 'Training',
            component: () => import ('./components/MainTrainingPage.vue')
        },
        {
            path: '/testimonials',
            name: 'Testimonials',
            component: () => import ('./components/TestimonialPage/MainTestimonialPage.vue')
        },
        {
            path: '/collaborate',
            name: 'Collaborate-sponsor',
            component: () => import ('./components/collaboratePage/MainSponsorPage.vue'),
        },
        {
            path: '/faqs',
            name: 'Faqs',
            component: () => import ('./components/AboutUsPage/FrequentlyAsked/MainFaqsPage.vue'),
        },
        {
            path: '/contact',
            name: 'ContactUs',
            component: () => import ('./components/CONTACTUS/MainContactUsPage.vue'),
        },
        {
            path: '/profile',
            name: 'History&TeamPage',
            component: () => import ('./components/AboutUsPage/History&teamPage/MainHistiry&TeamPage.vue'),
        },
        {
            path: '/career',
            name: 'careerPage',
            component: () => import ('./components/AboutUsPage/CareerPage/MainCareerPage.vue'),
        },
        {
            path: '/Apply',
            name: 'ApplyNowPage',
            component: () => import ('./components/ApplyNowPage/MainApplyPage.vue'),
        },
        {
            path: '/fellows',
            name: 'Fellow',
            component: () => import ('./components/AboutUsPage/History&teamPage/fellowsList.vue')
        },
        {
            path: '/coWorkSpace',
            name: 'CO-WORKSPACE',
            component: () => import ('./components/coWorkSpace/mainCoWorkPage.vue')
        }
    ]
})


export default router;