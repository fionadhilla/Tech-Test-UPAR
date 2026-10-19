package usecase

import (
	"context"

	"siakup-fs-test-starter/module/announcement/domain"
)

type UseCase struct {
	repository domain.AnnouncementRepository
}

func NewUseCase(repository domain.AnnouncementRepository) *UseCase {
	return &UseCase{repository: repository}
}

// TODO(candidate): implement per the contract documented on
// domain.AnnouncementUseCase.GetList. Compute totalPages from total and
// filter.Size — see the pagination logic question in the written test if
// you're unsure how to handle filter.Size <= 0.
func (u *UseCase) GetList(ctx context.Context, filter domain.AnnouncementFilter) ([]*domain.Announcement, int64, int, error) {
	panic("not implemented")

}

// TODO(candidate): implement per the contract documented on
// domain.AnnouncementUseCase.Create. Validation belongs here, NOT in the HTTP
// handler and NOT in the repository.
func (u *UseCase) Create(ctx context.Context, req domain.CreateAnnouncementRequest) (*domain.Announcement, error) {
	panic("not implemented")
}
