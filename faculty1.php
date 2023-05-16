<?php
    $url="https://scholar.google.com/citations?user=wAFTgEkAAAAJ&hl=en&oi=ao";
    $fp = fopen("google_scholar_page.txt", "w");
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HEADER, 0);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 60);
    curl_setopt($curl, CURLOPT_FILE, $fp);

    $GScontent=curl_exec($curl);

	if(curl_error($curl)) {
		fwrite($fp, curl_error($curl));
	}

    curl_close($curl);
    fclose($fp);

	$lastfetched_date="";
	$lastfetched_file='googlescholar_raghu.html';

	//echo date("F d Y h:i:s A",filemtime("googlescholar_raghu.html"));

	// GETTING LAST FETCHED GOOGLE SCHOLAR PAGE DATA
	if($GScontent=="")
    {
   		$GScontent = file_get_contents('googlescholar_raghu.html');
		echo 'Fetched '.date("M d Y h:i:s A",filemtime("googlescholar_raghu.html")).' ';
    }
    else
    {
    	$fp1 = fopen($lastfetched_file, 'w');
	    if (fwrite($fp1, $GScontent) === FALSE) {
        	echo "Cannot write to file ($fp1)";
		}
		fclose($fp1);

		//echo filemtime('googlescholar_raghu.html'));
		//$lastfetched_date=date("F d Y h:i:s A",filemtime("googlescholar_raghu.html"));
		//echo $lastfetched_date;
		echo 'Fetched '.date("M d Y h:i:s A",filemtime("googlescholar_raghu.html")).' ';
    }

	function get_citations($GScontent, $url)
	{
		$GSText= '';
		$output = preg_match_all('/<div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_cit" role="region" aria-labelledby="gsc_prf_t-cit">(.*)<\/div><div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_co" role="region" aria-labelledby="gsc_prf_t-ath">/',$GScontent,$matches);

        if(!isset($matches[1][0]))
		{
		$output = preg_match_all('/<div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_cit" role="region" aria-labelledby="gsc_prf_t-cit">(.*)<\/div><div class="gsc_lcl" role="main" id="gsc_prf_w">/',$GScontent,$matches);
		}

		$GSText= isset($matches[1][0])?$matches[1][0]:'e1';
        // GET THE TOTAL CITATIONS
		preg_match_all('/Citations<\/a><\/td><td class="gsc_rsb_std">(\d+)<\/td>/is',$GSText,$matches);
		$citations = isset($matches[1][0])?$matches[1][0]:'e2';

		preg_match_all('/h-index<\/a><\/td><td class="gsc_rsb_std">(\d+)<\/td>/is',$GSText,$matches);
		$hindex = isset($matches[1][0])?$matches[1][0]:'e3';

        preg_match_all('/i10-index<\/a><\/td><td class="gsc_rsb_std">(\d+)<\/td>/is',$GSText,$matches);
        $i10index = isset($matches[1][0])?$matches[1][0]:'e4';
        //PUT THEM TOGETHER
		preg_match_all('/<style>(.+)/is',$GSText,$matches);
		        $GSText2 = isset($matches[1][0])?$matches[1][0]:'e5';
 
		$GSText3 = '<a href="'.$url.'">Google Scholar</a> Real-time<br>'.'Citations: '.$citations.'<br>h-index: '.$hindex.'<br> i10-index: '.$i10index;
		//$GSText4 = '<table style="width:100%"> <tr> </tr> </table>';
	  
		return $GSText3;
	}

	print get_citations($GScontent, $url );

?>

