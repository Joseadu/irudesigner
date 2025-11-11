import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesItemsService {
  constructor() {}

  qhItems = [
    {
      titulo: 'ABOUT.WHAT_I_DO.BRAND_STRATEGY.TITLE',
      descripcion:
        'ABOUT.WHAT_I_DO.BRAND_STRATEGY.DESCRIPTION',
      lista: [
        'ABOUT.WHAT_I_DO.BRAND_STRATEGY.1',
        'ABOUT.WHAT_I_DO.BRAND_STRATEGY.2',
        'ABOUT.WHAT_I_DO.BRAND_STRATEGY.3',
        'ABOUT.WHAT_I_DO.BRAND_STRATEGY.4',
        'ABOUT.WHAT_I_DO.BRAND_STRATEGY.5',
        'ABOUT.WHAT_I_DO.BRAND_STRATEGY.6',
        'ABOUT.WHAT_I_DO.BRAND_STRATEGY.7',
        'ABOUT.WHAT_I_DO.BRAND_STRATEGY.8',
      ],
      open: false,
    },
    {
      titulo: 'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.TITLE',
      descripcion:
        'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.DESCRIPTION',
      lista: [
        'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.1',
        'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.2',
        'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.3',
        'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.4',
        'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.5',
        'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.6',
        'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.7',
        'ABOUT.WHAT_I_DO.GRAPHIC_DESIGN.8',
      ],
      open: false,
    },
    {
      titulo: 'ABOUT.WHAT_I_DO.BRANDING.TITLE',
      descripcion:
        'ABOUT.WHAT_I_DO.BRANDING.DESCRIPTION',
      lista: [
        'ABOUT.WHAT_I_DO.BRANDING.1',
        'ABOUT.WHAT_I_DO.BRANDING.2',
        'ABOUT.WHAT_I_DO.BRANDING.3',
        'ABOUT.WHAT_I_DO.BRANDING.4',
        'ABOUT.WHAT_I_DO.BRANDING.5',
        'ABOUT.WHAT_I_DO.BRANDING.6',
        'ABOUT.WHAT_I_DO.BRANDING.7',
        'ABOUT.WHAT_I_DO.BRANDING.8',
      ],
      open: false,
    },
    {
      titulo: 'ABOUT.WHAT_I_DO.UI/UX_DESIGN.TITLE',
      descripcion:
        'ABOUT.WHAT_I_DO.UI/UX_DESIGN.DESCRIPTION',
      lista: [
        'ABOUT.WHAT_I_DO.UI/UX_DESIGN.1',
        'ABOUT.WHAT_I_DO.UI/UX_DESIGN.2',
        'ABOUT.WHAT_I_DO.UI/UX_DESIGN.3',
        'ABOUT.WHAT_I_DO.UI/UX_DESIGN.4',
        'ABOUT.WHAT_I_DO.UI/UX_DESIGN.5',
        'ABOUT.WHAT_I_DO.UI/UX_DESIGN.6',
        'ABOUT.WHAT_I_DO.UI/UX_DESIGN.7',
        'ABOUT.WHAT_I_DO.UI/UX_DESIGN.8',
      ],
      open: false,
    },
  ];
}
