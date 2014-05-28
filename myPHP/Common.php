<?php

if(!defined('DS')) define('DS', DIRECTORY_SEPARATOR);
if(!defined('EXT_BASE')) 		define('EXT_BASE', dirname(__FILE__) . DS );
if(!defined('APP_CODEBASE')) 		define('APP_CODEBASE', EXT_BASE . '..' . DS . '..' . DS);
if(!defined('APP_EXTENSION'))		define('APP_EXTENSION', TRUE);

$request = 'web';
if( isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH'])=='xmlhttprequest' )
{
	$request = (isset($_SERVER['HTTP_X_REQUEST']) && strtolower($_SERVER['HTTP_X_REQUEST'])=='json') ? 'json' : 'ajax';
}
include_once(APP_CODEBASE . 'php' . DS . 'common.php');


	class CommonHandler{
		private $UserName;
		private $userRole;
		function createJSONResponse($query){
			$result = mysql_query($query);
			$arr = array();
			$i = 0;

			while($row = mysql_fetch_array($result)){
				$arr[$i] = array('Area' => $row['Area'], 'Expertise' => $row['Expertise'],'Expert' => $row['Expert'],'Role' => $row['Role'],'SkillID' => $row['SkillID'],'userRole' => $this->userRole);
				$i ++;
	  		}
	  		if(function_exists("json_encode")) 
    			return json_encode($arr);		
    		else
    			return "";
    	}
		function createJSONResponse_packaging($query){
			$result = mysql_query("$query order by Topic");
			$arr = array();
			$i = 0;

			while($row = mysql_fetch_array($result)){
				$arr[$i] = array('TopicID' => $row['TopicID'],'Topic' => $row['Topic'], 'URL' => $row['URL'],'Description' => $row['Description'],'Author' => $row['Author'],'CreateDate' => $row['CreateDate'],'userName' => $this->UserName,'userRole' => $this->userRole);
				$i ++;
	  		}
	  		if(function_exists("json_encode")) 
    			return json_encode($arr);		
    		else
    			return "";
    	}
    	function createJSONResponse_faq($query){
			$result = mysql_query($query);
			$arr = array();
			$i = 0;

			while($row = mysql_fetch_array($result)){
$commentsQuery = "select CommentID from FAQComments where FAQID =".$row['FAQID'];
				$comments = mysql_query($commentsQuery);
				$commentCount = mysql_num_rows($comments);
				$arr[$i] = array('FAQID' => $row['FAQID'], 'Question' => $row['Question'],'Answer' => $row['Answer'],'LikeCount' => $row['LikeCount'],'commentCount'=>$commentCount);
				$i ++;
	  		}
	  		if(function_exists("json_encode")) 
    			return json_encode($arr);		
    		else
    			return "";
    	}
    	function createJSONResponse_comments($query){
			$result = mysql_query($query);
			$arr = array();
			$i = 0;
			$commentCount = mysql_num_rows($result);
			while($row = mysql_fetch_array($result)){
				$arr[$i] = array('FAQID' => $row['FAQID'], 'CommentID' => $row['CommentID'],'CommentContent' => $row['CommentContent'],'UserName' => $row['UserName'],'CommentDate' => $row['CommentDate'],'commentCount'=>$commentCount);
				$i ++;
	  		}

	  		if(function_exists("json_encode")) 
    			return json_encode($arr);		
    		else
    			return "";
    	}
    	function createJSONResponse_feedback($query){
    		$result = mysql_query($query);
			$arr = array();
			$i = 0;
			$commentCount = mysql_num_rows($result);
			while($row = mysql_fetch_array($result)){
				$arr[$i] = array('FeedbackID' => $row['FeedbackID'], 'FeedbackContent' => $row['FeedbackContent'],'UserName' => $row['UserName'],'FeedbackDate' => $row['FeedbackDate']);
				$i ++;
	  		}

	  		if(function_exists("json_encode")) 
    			return json_encode($arr);		
    		else
    			return "";
    	}
		

    	function handleEditTopic(){
	  		$topicID = _get("topicID");
	  		$query = "select * from CRMIndex where TopicID = '".$topicID."'";
	  		return $this->createJSONResponse_packaging($query);
    	}
    	function handleDeleteTopic(){
    		$topicID = _get("topicID");
	  		$deletequery = "delete from CRMIndex where TopicID = '".$topicID."'";
			mysql_query($deletequery);
	  		$startAlpha = _get("letter");
	  		$query = "select * from CRMIndex where Topic like '".$startAlpha."%'";
	  		return $this->createJSONResponse_packaging($query);
    	}
		function handleEditTopicConfirm(){
			$topic = addslashes(_get("topic"));
	  		$author = addslashes(_get("author"));
	  		$url = addslashes(_get("url"));
	  		$description = addslashes(_get("description"));
	  		$createDate = _get("createDate");
	  		$topicID = _get("topicID");

	  		$updatequery = "update CRMIndex set Topic = '".$topic."' , URL = '".$url."' ,";
	  		$updatequery = $updatequery." Description = '".$description."' , Author = '".$author."' , CreateDate = '".$createDate."' where TopicID = '".$topicID."'";
	  		mysql_query($updatequery);
	  		$startAlpha = $topic[0];
	  		$query = "select * from CRMIndex where Topic like '".$startAlpha."%'";
	  		return $this->createJSONResponse_packaging($query);
		}
		function handleAddTopicConfirm(){
			$topic = addslashes(_get("topic"));
	  		$author = addslashes(_get("author"));
	  		$url = addslashes(_get("url"));
	  		$description = addslashes(_get("description"));
	  		$createDate = _get("createDate");
	  		$letter = _get("letter");
	  		$insertquery = "insert into CRMIndex (Topic,URL,Description,Author,CreateDate) values ('".$topic."','".$url."','".$description."','".$author."','".$createDate."')";
	  		mysql_query($insertquery);
	  		$startAlpha = $letter;
	  		$query = "select * from CRMIndex where Topic like '".$startAlpha."%'";
	  		return $this->createJSONResponse_packaging($query);
		}
		function handleClickOnAlpha(){			
	  		$letter = _get("letter");
	  		$uppLetter = strtoupper($letter);
	  		$query = "select * from CRMIndex where Topic like '".$letter."%' or '".$uppLetter."%'";
	  		return $this->createJSONResponse_packaging($query);
		}
		function handleAddConfirm(){
	  		$newArea = addslashes(_get("newArea"));
	  		$newExpertise = addslashes(_get("newExpertise"));
	  		$newExpert = addslashes(_get("newExpert"));
	  		$newRole = addslashes(_get("newRole"));
	  		$insertquery = "insert into skillset (Area,Expertise,Expert,Role) values ('".$newArea."','".$newExpertise."','".$newExpert."','".$newRole."')";
	  		mysql_query($insertquery);
			$query = "select * from skillset where SkillID = (select max(SkillID) from skillset)";
	  		//$query = "select * from skillset";
	  		return $this->createJSONResponse($query);
		}
		function handleDeleteRow(){
	  		$skillID = _get("skillID");
	  		$deletequery = "delete from SkillSet where SkillID = '".$skillID."'";
	  		mysql_query($deletequery);
			return $this->handleSearchSkillset();
	  		//$query = "select * from skillset";
	  		//return $this->createJSONResponse($query);
		}
		function handleSearchSkillset(){
			$keywords = addslashes(_get("query"));			
			$whereQuery = "where Area like '%".$keywords."%' or Expertise like '%".$keywords."%' or Expert like '%".$keywords."%' or Role  like '%".$keywords."%'";
			$query = "select * from skillset ".$whereQuery;
	  		return $this->createJSONResponse($query);
		}
		function handleEditConfirm(){
			$skillID = addslashes(_get("skillID"));
	  		$editArea = addslashes(_get("editArea"));
	  		$editExpertise = addslashes(_get("editExpertise"));
	  		$editExpert = addslashes(_get("editExpert"));
	  		$editRole = addslashes(_get("editRole"));
	  		$updatequery = "update skillset set Area = '".$editArea."' , Expertise = '".$editExpertise."' , Expert = '".$editExpert."' , Role = '".$editRole."' where SkillID = '".$skillID."' ";
	  		mysql_query($updatequery);
			$keywords = addslashes(_get("query"));
			if($keywords == null){
				$query = "select * from skillset where SkillID = '".$skillID."' ";
	  			return $this->createJSONResponse($query);
			}
			return $this->handleSearchSkillset();
	  		//$query = "select * from skillset where SkillID = '".$skillID."' ";
	  		//return $this->createJSONResponse($query);
		}
		function handleEditRow(){
			$skillID = _get("SkillID");
	  		$query = "select * from skillset where SkillID = '".$skillID."'";
	  		return $this->createJSONResponse($query);
		}
		function initSkillSet(){
			$createSkillSetTable = "create table if not exists SkillSet
			(
			SkillID INT NOT NULL AUTO_INCREMENT,
			active BOOLEAN NOT NULL DEFAULT '1',
			Area varchar(100) ,
			Expertise varchar(200) ,
			Expert varchar(200) ,
			Role varchar(100) ,
			primary key	(SkillID))DEFAULT CHARSET=utf8;";
			mysql_query($createSkillSetTable);
			$query = "select * from skillset";
			return $this->createJSONResponse($query);
		}
		function initCRMIndex(){
			$createCRMTable = "create table if not exists CRMIndex
			(
			TopicID INT NOT NULL AUTO_INCREMENT,
			Topic varchar(100) not null,
			active BOOLEAN NOT NULL DEFAULT '1',
			URL varchar(300) not null,
			Description varchar(500) not null,
			Author varchar(100) not null,
			CreateDate varchar(100) not null,
			primary key (TopicID))DEFAULT CHARSET=utf8;";
			mysql_query($createCRMTable);
			$query = "select * from CRMIndex where Topic like 'A%' or 'a%'";
			return $this->createJSONResponse_packaging($query);
			// return $query;
		}
		function createFAQTable(){
			$createFAQTable = "create table if not exists FAQTable
			(
			FAQID INT NOT NULL AUTO_INCREMENT,
			active BOOLEAN NOT NULL DEFAULT '1',
			Question varchar(300) not null,
			Answer varchar(800) not null,
			LikeCount int DEFAULT 0,
			primary key	(FAQID))DEFAULT CHARSET=utf8;
			";
			mysql_query($createFAQTable);
		}
		function creatCommentsTable(){
			$createCommentsTable = "create table if not exists FAQComments
			(
			FAQID int not null,
			CommentID int not null,
			active BOOLEAN not null DEFAULT '1',
			CommentContent varchar(300),
			UserName varchar(100),
			CommentDate varchar(100),
            foreign key(FAQID) references FAQTable(FAQID) on delete cascade on update cascade,
            primary key(FAQID,CommentID)
            )DEFAULT CHARSET=utf8;
			";
			mysql_query($createCommentsTable);

		}
		function initFAQTable(){
			$this->createFAQTable();
			$this->creatCommentsTable();
			$query = "select * from FAQTable";
			return $this->createJSONResponse_faq($query);
		}
		function handleAddLike(){
			$likeCount = _get("likeCount")+1;
			$faqID = _get("faqID");
	  		$updatequery = "update FAQTable set LikeCount = ".$likeCount." where FAQID = ".$faqID;
	  		mysql_query($updatequery);
	  		$query = "select * from FAQTable where FAQID =".$faqID;
			return $this->createJSONResponse_faq($query);		
		}
		function handleGetComments(){
			$faqID = _get("faqID");	  		
	  		$query = "select * from FAQComments where FAQID =".$faqID." order by CommentID desc";
			return $this->createJSONResponse_comments($query);
		}
		function handleSubmitReply(){

			$commentContent = addslashes(_get("commentContent"));
			$faqID = _get("faqID");
			if(isset($this->UserName))
				$userName = $this->UserName;
			else			
				$userName = "UserNotIdentified";
			//$commentDate = _get("createDate");
			$commentDate = date('d.m.Y H:i:s');
			$query = "select * from FAQComments where FAQID = ".$faqID." order by CommentID desc";
			$result = mysql_query($query);
			$commentID = mysql_num_rows($result)+1;
	  		$insertquery = "insert into FAQComments (FAQID,CommentID,CommentContent,UserName,CommentDate) values ('".$faqID."','".$commentID."','".$commentContent."','".$userName."','".$commentDate."')";
	  		mysql_query($insertquery);	  		
			return $this->createJSONResponse_comments($query);
		}
		function handleGetCurrentUser(){
			$userDate = date('m/d/Y');
			$arr = array('userName' => $this->UserName,'userDate'=>$userDate,'userRole'=>$this->userRole);
			if(function_exists("json_encode")) 
    				return json_encode($arr);		
    			else
    				return "";
		}
		function createFeedbackTable(){
			$createFeedbackTable = "create table if not exists FeedbackExtensions
			(
			FeedbackID int not null AUTO_INCREMENT,
			active BOOLEAN not null DEFAULT '1',
			FeedbackContent varchar(500),
			UserName varchar(100),
			FeedbackDate varchar(100),
            primary key(FeedbackID)
            )DEFAULT CHARSET=utf8;
			";
			mysql_query($createFeedbackTable);
		}
		function initFeedbackTable(){
			$this->createFeedbackTable();
			$query = "select * from FeedbackExtensions order by FeedbackID desc";
			return $this->createJSONResponse_feedback($query);
		}
		function handleSubmitFeedbacks(){
						$content = addslashes(_get("content"));

			if(isset($this->UserName))
			 	$userName = $this->UserName;
			else			
				$userName = "UserNotIdentified";
			$commentDate = date('d.m.Y H:i:s');
			$query = "select * from FeedbackExtensions order by FeedbackID desc";
	  		$insertquery = "insert into FeedbackExtensions (FeedbackContent,UserName,FeedbackDate) values ('".$content."','".$userName."','".$commentDate."')";
	  		//mysql_query($insertquery);	

	  		error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);
			require_once "Mail.php";
			$from = "gordon.liu@sap.com";
			$to = "gordon.liu@sap.com";
			$subject = "Feedback from cockpit";
			$body = $userName."\n\n".$content."\n\n".$commentDate;
			$host = "mail.sap.corp";
			$headers = array ('From' => $from,
			'To' => $to,
			'Subject' => $subject);
			$smtp = Mail::factory('smtp',
			array ('host' => $host,
			'auth' => false));
			$mail = $smtp->send($to, $headers, $body);

			return $this->createJSONResponse_feedback($query);
		}
		function requestHandler($type){
			$query = "";

			/*Skillset Request Handler*/
			if($type == "initSkillSet")
				return $this->initSkillSet();
			else if($type == "editSkillSet")
		  		return $this->handleEditRow();
		  	else if($type == "confirmEditSkillSet")
		  		return $this->handleEditConfirm();
		  	else if($type == "deleteSkillSet")
		  		return $this->handleDeleteRow();
		  	else if($type == "confirmCreateSkillSet")
		  		return $this->handleAddConfirm();
			else if($type == "searchSkillset")
		  		return $this->handleSearchSkillset();

			/*Index Request Handler*/
			else if($type == "initCRMIndex")
				return $this->initCRMIndex();
		  	else if($type == "clickOnAlpha")
		  		return $this->handleClickOnAlpha();
		  	else if($type == "editTopic" || $type == "showDetails")
		  		return $this->handleEditTopic();
		  	else if($type == "editTopicConfirm")
		  		return $this->handleEditTopicConfirm();
		  	else if($type == "deleteTopic")
		  		return $this->handleDeleteTopic();
	  		else if($type == "addTopicConfirm")
		  		return $this->handleAddTopicConfirm();

			/*FAQ Request Handler*/
			else if($type == "initFAQTable")
				return $this->initFAQTable();
		  	elseif ($type == "addLike")
		  		return $this->handleAddLike();

		  	elseif ($type == "getComments")
		  		return $this->handleGetComments();

		  	elseif ($type == "submitReply")
		  		return $this->handleSubmitReply();

			elseif ($type == "getCurrentAuthor")
		  		return $this->handleGetCurrentUser();
			/*Feedback Request Handler*/
			else if($type == "initFeedbackTable")
				return $this->initFeedbackTable();
			elseif ($type == "submitFeedbacks")
		  		return $this->handleSubmitFeedbacks();
		  	else

		  		return "";
		}

		function CommonHandler($name,$type){
			$this->UserName = $name;	
			$this->userRole = $type;

			require_once 'SqlForTable.php';

			if (!$con)
  				die('Could not connect: ' . mysql_error());
  			$type = _get("type");
  			$response = "";
  			if(isset($type))
  				$response = $this->requestHandler($type);				
  			echo $response;
		}
	}


	$common = new CommonHandler($user_name,$user_type);

?>