package com.enesbayram.questapp.controller.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.enesbayram.questapp.controller.IRestLikeController;
import com.enesbayram.questapp.dto.DtoLike;
import com.enesbayram.questapp.dto.DtoLikeIUI;
import com.enesbayram.questapp.entities.Like;
import com.enesbayram.questapp.entities.RestRootEntity;
import com.enesbayram.questapp.service.ILikeService;

@RestController
@RequestMapping("/likes")
public class RestLikeControllerImpl extends RestBaseController implements IRestLikeController {

	@Autowired
	private ILikeService likeService;

	@GetMapping
	@Override
	public RestRootEntity<List<DtoLike>> getAllLikesWitParams(@RequestParam(required = false) Long userId,
			@RequestParam(required = false) Long postId) {
		return ok(likeService.getAllLikesWitParams(userId, postId));
	}

	@GetMapping("/{likeId}")
	@Override
	public RestRootEntity<DtoLike> findLikeById(@PathVariable Long likeId) {
		return ok(likeService.findLikeById(likeId));
	}

	@PostMapping
	@Override
	public RestRootEntity<Like> saveLike(@RequestBody DtoLikeIUI dtoLikeIUI) {
		return ok(likeService.saveLike(dtoLikeIUI));
	}

	@DeleteMapping("/{likeId}")
	@Override
	public RestRootEntity<String> deleteLike(@PathVariable Long likeId) {
		return ok(likeService.deleteLike(likeId));
	}

	@DeleteMapping
	@Override
	public RestRootEntity<String> deleteLikeByUserAndPostId(@RequestParam(required = false) Long userId, @RequestParam(required = false) Long postId) {
		return ok(likeService.deleteLikeByUserAndPostId(userId, postId));
	}

}
