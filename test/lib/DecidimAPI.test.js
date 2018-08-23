import fetchMock from 'fetch-mock';
import fetchPetition from '../../lib/DecidimAPI';

describe('Decidim API class', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('Decidim API fetch petition data', () => {
    const petitionLink = 'petitions';
    const petitionId = '2';

    const petitionFromDecidim = {
      data: {
        participatoryProcess: {
          id: petitionId,
          title: {
            translation: "Pla d'Actuació Municipal",
          },
        },
      },
    };

    const expectedPetition = {
      petition: {
        id: petitionId,
        title: petitionFromDecidim.data.participatoryProcess.title.translation,
        attributes: {
          mandatory: [{
            predicate: 'schema:addressLocality',
            object: 'Barcelona',
            scope: 'can-access',
            credentialIssuer: {
              url: 'http://atlantis-decode.s3-website-eu-west-1.amazonaws.com',
            },
          }],
          optional: [],
        },
      },
    };

    const graphQlQuery = `${petitionLink}
        query={
          participatoryProcess(id: ${petitionId}) {
            id
            title {
              translation (locale: "ca")
            }
          }
        }
      `;
    it('should return the petition from Decidim API', async () => {
      fetchMock.getOnce(graphQlQuery, petitionFromDecidim);
      const actualPetition = await fetchPetition(petitionLink, petitionId);

      expect(actualPetition).toEqual(expectedPetition);
    });

    it('should return an error if there is a problem fetching from Decidim', async () => {
      const error = {
        error: new Error('Failed Fetch'),
        message: 'Could not retrieve petition details.',
      };

      fetchMock.getOnce(graphQlQuery, Promise.reject(new Error('Failed Fetch')));
      const petitionResponse = await fetchPetition(petitionLink, petitionId);

      expect(petitionResponse).toEqual(error);
    });

    it('should return an error if fetch was successful but returns not 200', async () => {
      const error = { error: 403, message: 'Unknown error' };

      const errorResponse403 = {
        status: 403,
        body: '',
      };
      fetchMock.getOnce(graphQlQuery, errorResponse403);
      const actualPetition = await fetchPetition(petitionLink, petitionId);
      expect(actualPetition).toEqual(error);
    });
  });
});
