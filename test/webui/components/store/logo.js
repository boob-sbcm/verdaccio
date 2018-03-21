/**
 * Mock response for login api
 * @returns {promise}
 */
export default function() {
  const response = {
    url: 'http://xyz.com/image.jpg'
  };
  return Promise.resolve(response);
}
