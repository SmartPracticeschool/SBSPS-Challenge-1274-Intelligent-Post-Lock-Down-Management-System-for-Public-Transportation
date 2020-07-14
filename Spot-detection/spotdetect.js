const fs = require('fs');
const VisualRecognitionV4 = require('ibm-watson/visual-recognition/v4');
const { IamAuthenticator } = require('ibm-watson/auth');
//Call object detection model API
const visualRecognition = new VisualRecognitionV4({
  version: '2019-02-11',
  authenticator: new IamAuthenticator({
    apikey: '7fuJ_AZ6A5lb-YbE-j7SH72sai438oQvC5acZ9Cn9LDD'
  }),
  url: 'https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/b09a5c92-c2b7-4815-b680-09170d72aeb4',
});
//Test
const params = {
  imagesFile: [
    {
		data: fs.createReadStream('./data/14.png'),
		contentType: 'image/png',
	  },
	  
	],
  collectionIds: ['b6c28364-2f50-44c1-ad95-472ed18e232d'],
  features: ['objects'],
  threshold: 0.15,
};
//Result
total_spots=20
visualRecognition.analyze(params)
  .then(response => {
    available_spots=response.result.images[0].objects.collections[0].objects.length
    percent_available=available_spots/total_spots*100
    console.log('Total spots : ',total_spots);
    console.log('Spots Available : ',available_spots);
    console.log('%Available : ',percent_available);
    if(percent_available>=55)
	console.log('STATUS : SAFE SPACE');
    else
	console.log('STATUS : SPACE NOT RECOMMENDED');
  })
  .catch(err => {
    console.log('error: ', err);
  });
