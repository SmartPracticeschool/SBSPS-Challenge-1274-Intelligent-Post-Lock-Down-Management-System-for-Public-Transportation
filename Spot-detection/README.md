# Spot detection in an image with Watson Studio & Visual Recognition

The IBM Watson™ Visual Recognition service uses deep learning algorithms to analyze images for scenes, objects, and other content. IBM Watson™ Visual Recognition Custom Object Detection identifies items and their location in an image. The service detects these items based on a set of images with labeled training data that you provide.

You train the object detection model to recognize objects that are important to your workflow or domain. For example, detect damage to cars, find machines that need maintenance, or inspect items in the field. You can also use object detection to count objects or manage inventory.

### Access Custom Model APIs via Node.js

To call your custom model API in `Node.js` application,

1. Open file `spotdetect.js` in your file editor. File `spotdetect.js` locates  in the root folder of your downloaded repo directory.

1. Modify the following three lines.

    ```
    apikey: '{apikey}'
    url: '{url}',
    collectionIds: ['{model_id}'],
    ```

    > Note: Replace `{apikey}` with the `apikey` of your `Visual Recognition` instance that you retrieved in the previous section.

    > Note: Replace `{url}` with the `url` of your `Visual Recognition` instance that you retrieved in the previous section..

    > Note: Replace `{model_id}` with your custom model ID. It can be found on the `Overview` tab of your custom model. 
    
    > Note: Replace `./data/14.png` with the test image. The image can be found in the `data` folder of your downloaded repo directory. 
    
1. Save  the changes.

1. Download required libraries.

    ```
    npm install
    ```

1. Run the sample application.

    ```
    node spotdetect.js
    ```































