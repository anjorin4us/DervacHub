import { createRouter, createWebHistory } from 'vue-router';




const router = createRouter({
    mode: 'history',
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
            path: '/apply',
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
        },
        {
            path: '/thank-you',
            name: 'thankYou',
            component: () => import ('./components/formSubmitted.vue'),
            beforeEnter: (to, from, next) => {
                const submittedForm = localStorage.getItem('submittedForm');
                if (submittedForm === true) {
                    next()
                } else {
                    next("/contact")
                }       
            }
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition; // If returning to a previous page, it scrolls to the last position
        } else {
          return { left: 0, top: 0 }; // Always scroll to the top of the page
        }
        }
})


export default router;