import { animate, AnimationMetadata, AnimationQueryOptions, group, query, style, transition, trigger } from "@angular/animations";


export const slide = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                width: '100%',
                transform: 'scale(0) translateY(100%)'
            })
        ]),
        query(':enter', [
            animate('600ms ease',
            style({
                opacity: 1,
                transform: 'scale(1) translateY(0)'
            }))
        ])
    ])
])

// export const slide = trigger('routeAnimations', [
//   transition('* <=> *', slideTo()),
// ]);
//
// function slideTo() : AnimationMetadata[] {
//   const optional: AnimationQueryOptions = {optional: true};
//
//   return [
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%'
//       })
//     ], optional),
//     query(':enter', [
//       style({ left: '-100%'})
//     ], optional),
//     group([
//       query(':leave', [
//         animate('600ms ease', style({transform: 'scale(0) translateY(100%)'}))
//       ], optional),
//       query(':enter', [
//         animate('600ms ease', style({left: '0%'}))
//       ])
//     ])
//   ];
// }
