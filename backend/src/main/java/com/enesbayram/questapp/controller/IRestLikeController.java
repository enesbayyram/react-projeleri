package com.enesbayram.questapp.controller;

import java.util.List;

import com.enesbayram.questapp.dto.DtoLike;
import com.enesbayram.questapp.dto.DtoLikeIUI;
import com.enesbayram.questapp.entities.Like;
import com.enesbayram.questapp.entities.RestRootEntity;

public interface IRestLikeController {

	RestRootEntity<List<DtoLike>> getAllLikesWitParams(Long userId, Long postId);

	RestRootEntity<DtoLike> findLikeById(Long likeId);

	RestRootEntity<Like> saveLike(DtoLikeIUI dtoLikeIUI);

	RestRootEntity<String> deleteLike(Long likeId);
	
	RestRootEntity<String> deleteLikeByUserAndPostId(Long userId , Long postId);
}
