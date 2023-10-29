package com.enesbayram.questapp.service;

import java.util.List;

import com.enesbayram.questapp.dto.DtoLike;
import com.enesbayram.questapp.dto.DtoLikeIUI;
import com.enesbayram.questapp.entities.Like;

public interface ILikeService {

	List<DtoLike> getAllLikesWitParams(Long userId , Long postId);
	
	DtoLike findLikeById(Long likeId);
	
	Like saveLike(DtoLikeIUI dtoLikeIUI);
	
	String deleteLike(Long likeId);
	
	String deleteLikeByUserAndPostId(Long userId , Long postId);
}
