---
id: 506
title: Plug in to Amazon Web Services (AWS) using PHP
date: 2010-03-17T12:55:46+00:00
author: Kyle
layout: post
guid: http://www.kyleschaeffer.com/?p=506
permalink: /amazon-web-services-php
redirect_from:
  - /development/amazon-web-services-php
categories:
  - Development
tags:
  - PHP
---
I’ve recently started using [Amazon Web Services](http://aws.amazon.com/) (AWS) to import large amounts of rich content into my weekend-warrior project, [ThumbSticks.com](http://thumbsticks.com). I have to say that I’m quite impressed with Amazon’s dedication to providing their product information in such a transparent and detailed manner. If you’re not familiar with AWS, here is a quick introduction and some useful code snippets to help you get started with AWS in your PHP environment.

## What is AWS?

[Amazon Web Services](http://aws.amazon.com/) is a set of web services provided by [Amazon.com](http://www.amazon.com) free of charge. Basically, you can query Amazon’s vast database of information to obtain product details, reviews, images, and just about any other information you can imagine related to any product sold at Amazon.com. In this example, we’re specifically looking at Amazon’s REST web services, which is data that can be retrieved via a unique URL request to the AWS servers. If your web project involves any product-related data, AWS is definitely worth a look. Enriching your existing pages with information retrieved through AWS can augment the utility of your content, making it more useful for your users, and ultimately more important to everyone. If you’re the entrepreneurial type, you can also make commission by letting your users click through to Amazon.com in an attempt to sell their products. It’s win-win for everyone.

## How it Works

Getting information from AWS is easy. First of all, you’ll have to set up an AWS account and also sign up for the [Amazon Associates program](https://affiliate-program.amazon.com/). After signing up for these two programs, you should have all the information you need to make a web services request from your application.

In a nutshell, you make a request that includes things like the product type, query type, and keywords that you’re searching for. All of this information is bundled into a tidy URL structure that allows you to make flexible requests from just about any development platform out there. Once you’ve made a request, what you get back is an XML document that contains the product information you’re interested in.

## The Request URL

Generating a request URL is actually more complex than I thought it would be. There are a number of elements that are required in the URL, and some elements even need to be encrypted and escaped in a very specific order. After digging through some blog posts and AWS documentation, I came up with this very handy PHP function that generates an AWS request URL in a fairly easy and configurable fashion.

{% highlight php %}
<?
function awsRequest($searchIndex, $keywords, $responseGroup = false, $operation = "ItemSearch", $pageNumber = 1){
  $service_url = "http://ecs.amazonaws.com/onca/xml?Service=AWSECommerceService";
  $associate_tag = "your-associate-tag";
  $secret_key = "YOUR_SECRET_KEY";
  $access_key = "YOUR_ACCESS_KEY";

  // build initial request uri
  $request = "$service_url&Operation=$operation&AssociateTag=$associate_tag&SearchIndex=$searchIndex&Keywords=".urlencode($keywords)."&ItemPage=$pageNumber";

  // parse request into params
  $uri_elements = parse_url($request);
  $request = $uri_elements['query'];
  parse_str($request, $parameters);

  // add new params
  $parameters['Timestamp'] = gmdate("Y-m-dTH:i:sZ");
  $parameters['Version'] = $version;
  $parameters['AWSAccessKeyId'] = $access_key;
  if($responseGroup){
    $parameters['ResponseGroup'] = $responseGroup;
  }
  ksort($parameters);

  // encode params and values
  foreach($parameters as $parameter => $value){
    $parameter = str_replace("%7E", "~", rawurlencode($parameter));
    $value = str_replace("%7E", "~", rawurlencode($value));
    $request_array[] = $parameter . '=' . $value;
  }
  $new_request = implode('&', $request_array);

  // make it happen
  $signature_string = "GETn{$uri_elements['host']}n{$uri_elements['path']}n{$new_request}";
  $signature = urlencode(base64_encode(hash_hmac('sha256', $signature_string, $secret_key, true)));

  // return signed request uri
  return "http://{$uri_elements['host']}{$uri_elements['path']}?{$new_request}&Signature={$signature}";
}
?>
{% endhighlight %}

## What Now?

Now that you’ve added this function to your PHP application, you’re probably wondering, “What now?” This PHP function merely generates a signed URL by which you can make requests to the AWS web service. Now that this function is in place, you can actually call the web services like so:

{% highlight php %}
// make the request
$xml = simplexml_load_file(awsRequest("VideoGames", "call of duty", "Images", "ItemSearch", "1"));

// now retrieve some data
$totalPages = $xml->Items->TotalPages;
echo "<p>There are $totalPages pages in the XML results.</p>";

// retrieve data in a loop
echo "<ul>\n";
foreach($xml->Items->Item as $item){
  echo "<li>".$item->ASIN."</li>\n";
}
echo "</ul>\n";
{% endhighlight %}

The resulting output should show the total number of pages as well as an unordered list that contains the ASIN (Amazon’s unique item number) for each product that was returned in our result set. In our request function, we requested image-related data from Amazon’s **VideoGame** database using the keywords **call of duty**. We also requested results starting at page **1** of the result set.

## Go Deeper

Not sure where to go from here? I highly recommend utilizing the fantastic (and free) Firefox add-on, [HttpFox](https://addons.mozilla.org/en-US/firefox/addon/6647). If you’re making AJAX requests through AWS, you can use HttpFox to monitor the entire XML structure sent back. In my experience, the hardest part working with AWS is figuring out what type of information you want and sorting out their very complex XML structure. Be sure to utilize the AWS developer API as well, as it gives you pivotal information regarding query parameters and data set information to help you fine-tune your requests. I’m currently using the web services to import box art and screenshot images for about 12,000 video games in my database. This process has been made much easier through the use of AWS, and I’m happy to share my revelations with anyone who’s interested.

Good luck, and please let me know if this helps you in any way.
