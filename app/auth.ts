import NextAuth from 'next-auth';
// Import the necessary modules for custom OAuth provider
import Providers from 'next-auth/providers';

export const { handlers: { GET, POST }, auth } = NextAuth({
  providers: [
    Providers.OAuth2({
      id: 'openshift', // Custom ID for the provider
      name: 'OpenShift', // Name of the provider
      clientId: process.env.OPENSHIFT_OAUTH_CLIENT_ID,
      clientSecret: process.env.OPENSHIFT_OAUTH_CLIENT_SECRET,
      authorizationUrl: 'https://<openshift-cluster-url>/oauth/authorize?response_type=code',
      accessTokenUrl: 'https://<openshift-cluster-url>/oauth/token',
      // Additional configuration might be required here depending on OpenShift's OAuth implementation
    }),
  ],
  pages: {
    signIn: '/sign-in'
  }
});
