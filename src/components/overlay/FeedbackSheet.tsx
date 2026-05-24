import { useState } from 'react';
import { TwinButton } from '../twintalk/TwinButton';
import { SheetFrame } from './SheetFrame';

type FeedbackSheetProps = {
  onClose: () => void;
};

const options = ['不想认识陌生人', '兴趣不相关', '推荐理由不准', '暂时不需要'];

export function FeedbackSheet({ onClose }: FeedbackSheetProps) {
  const [selected, setSelected] = useState('');

  return (
    <SheetFrame onClose={onClose}>
      <h2 className="sheet-title">为什么不感兴趣？</h2>
      <div className="feedback-options">
        {options.map((option) => (
          <button key={option} className={selected === option ? 'active' : ''} type="button" onClick={() => setSelected(option)}>
            {option}
          </button>
        ))}
      </div>
      {selected ? (
        <p className="feedback-result">
          已调整你的分身偏好。分身会在社区互动中持续回写人格模型，使推荐越来越接近你本人。
        </p>
      ) : null}
      <TwinButton onClick={onClose}>{selected ? '完成' : '稍后再看'}</TwinButton>
    </SheetFrame>
  );
}
