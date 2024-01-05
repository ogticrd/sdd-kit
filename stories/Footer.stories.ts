import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '../components/footer';

const meta = {
  title: 'Example/Footer',
  tags: ['autodocs'],
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const playground: Story = {
  args: {
    contact: {
      phone: '(809) 555-5555',
      fax: '(809) 555-5555',
      email: 'correo@institucion.gob.do',
    },
    social: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
    },
    institutionFullName:
      'Oficina Gubernamental de Tecnologías de la Información y Comunicación (OGTIC)',
    address:
      'Av. México esq. Leopoldo Navarro, Santo Domingo, República Dominicana',
    links: {
      terms: 'https://www.ogtic.gob.do/terminos-y-condiciones',
      privacy: 'https://www.ogtic.gob.do/politica-de-privacidad',
      faq: 'https://www.ogtic.gob.do/preguntas-frecuentes',
    },
    logo: 'https://b2368105.smushcdn.com/2368105/wp-content/uploads/2021/06/logo.png?lossy=0&strip=1&webp=1',
  },
};
