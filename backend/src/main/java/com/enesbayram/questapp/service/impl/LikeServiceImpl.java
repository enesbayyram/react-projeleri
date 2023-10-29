package com.enesbayram.questapp.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enesbayram.questapp.dto.DtoLike;
import com.enesbayram.questapp.dto.DtoLikeIUI;
import com.enesbayram.questapp.entities.Like;
import com.enesbayram.questapp.entities.Post;
import com.enesbayram.questapp.entities.User;
import com.enesbayram.questapp.repository.LikeRepository;
import com.enesbayram.questapp.service.ILikeService;
import com.enesbayram.questapp.service.IPostService;
import com.enesbayram.questapp.service.IUserService;

@Service
public class LikeServiceImpl implements ILikeService{
	
	@Autowired
	private LikeRepository likeRepository;
	
	@Autowired
	private IUserService userService;

	@Autowired
	private IPostService postService;
	
	@Override
	public List<DtoLike> getAllLikesWitParams(Long userId, Long postId) {
		Optional<List<Like>> optional = likeRepository.getAllLikesWitParams(userId, postId);
		List<DtoLike> dtoList = new ArrayList<>();
		if(optional.isPresent()) {
			for (Like like : optional.get()) {
				dtoList.add(new DtoLike(like.getId(), like.getUser().getId(), like.getPost().getId()));
			}
			return dtoList;
		}
		return null;
	}

	@Override
	public DtoLike findLikeById(Long likeId) {
		Optional<Like> optional = likeRepository.findById(likeId);
		if(optional.isPresent()) {
			Like like = optional.get();
			DtoLike dtoLike = new DtoLike(like.getId() , like.getUser().getId() , like.getPost().getId());
			return dtoLike;
		}
		return null;
	}

	@Override
	public Like saveLike(DtoLikeIUI dtoLikeIUI) {
		User user = userService.findUserById(dtoLikeIUI.getUserId());
		Post post = postService.findPostById(dtoLikeIUI.getPostId());
		if(user!=null && post!=null) {
			Like saveLike =  new Like();
			saveLike.setUser(user);
			saveLike.setPost(post);
			
			return likeRepository.save(saveLike);
		}
		return null;
	}

	@Override
	public String deleteLike(Long likeId) {
		likeRepository.deleteById(likeId);
		return "like deleted";
	}

	@Override
	public String deleteLikeByUserAndPostId(Long userId, Long postId) {
		likeRepository.deleteLikeByUserAndPostId(userId, postId);
		return "Like deleted";
	}

}
