# Setting Up Environment

In this lab, you will be using Watson Studio and Watson Visual Recognition to create and deploy Visual Recognition model for image classification and object detection. You will need to have an instance of `Watson Studio` and an instance of Watson `Visudal Recognition` service, as well as a `Cloud Object` storage instance where your artifacts/assets get stored.

## Prerequisites

- An IBM Cloud ID

## Instructions

In order to run the labs, you should go through the following steps to set up the Watson Studio environment.

1. Go to the [IBM Cloud console]((https://cloud.ibm.com)) - (https://cloud.ibm.com) and log in (or create an account if you do not have one).


### Create Object Storage

To create a instance of `Object Storage` service,

1. Click on the **`Catalog`** link in the top banner of the IBM Cloud dashboard.  
   ![catalog-link](docs/images/ss1.png)

1. Select the 'Storage' category on the left, under `All Categories`. Then select the `Object Storage` service tile.
   ![cloud-cos](docs/images/ss6.png)

1. Accept the default options, select the Lite plan (or your preferred plan) and click the **`Create`** button.  
   ![create-cos-instance](docs/images/ss7.png)


### Create Visual Recognition

To create a instance of `Visual Recognition` service,

1. Still in the IBM Cloud console page, Click on the **`Catalog`** link in the top banner of the IBM Cloud dashboard.  

1. Select the `AI` category on the left, under `All Categories`. Then select the `Visual Recognition` service tile.
   ![wml](docs/images/ss10.png)

1. Accept the default options, select the Lite plan (or your preferred plan) and click the **`Create`** button.  
   ![create-wml-instance](docs/images/ss11.png)


### Create Watson Studio

To create a instance of `Watson Studio` service,

1. Still in the IBM Cloud console page, Click on the **`Catalog`** link in the top banner of the IBM Cloud dashboard.  

1. Select the `AI` category on the left, under `All Categories`.  
   ![ai-filter](docs/images/ss2.png)

1. Select the `Watson Studio` service tile.  
   ![ws-tile](docs/images/ss3.png)

1. Accept the default options and click the **`Create`** button.  
   ![create-ws-instance](docs/images/ss4.png)

1. On the service page. Right click on the **`Get Started`** button and select to open in a new tab to open the Watson Studio tooling.  
   ![ws-tooling](docs/images/ss5.png)
